import * as vt from 'vscode-textmate/release/main';
import path = require('path');

interface Grammar {
    grammar: vt.IGrammar;
    ruleStack?: vt.StackElement;
}

function hasDiff<T>(first: T[], second: T[], hasDiffT: (first: T, second: T) => boolean): boolean {
    if (first.length != second.length) {
        return true;
    }

    for (let i = 0; i < first.length; i++) {
        if (hasDiffT(first[i], second[i])) {
            return true;
        }
    }

    return false;
}

interface BuildOptions {
    tsGrammarFileName: string
    tsReactGrammarFileName: string
    tsLanguageName: string
    tsReactLanguageName: string
    marker: string
}

const DEFAULT_BUILD_OPTIONS: BuildOptions = {
    tsGrammarFileName: 'TypeScript.tmLanguage',
    tsReactGrammarFileName: 'TypeScriptReact.tmLanguage',
    tsLanguageName: "TypeScript.tmLanguage",
    tsReactLanguageName: "TypeScriptReact.tmLanguage",
    marker: '^^'
}

export class Builder {
    tsGrammar: vt.IGrammar
    tsReactGrammar: vt.IGrammar
    tsGrammarInfo: string
    tsReactGrammarInfo: string
    marker: string

    constructor(options: BuildOptions = DEFAULT_BUILD_OPTIONS) {
        const register = new vt.Registry();

        this.tsGrammar = register.loadGrammarFromPathSync(path.join(__dirname, '..', options.tsGrammarFileName));
        this.tsReactGrammar = register.loadGrammarFromPathSync(path.join(__dirname, '..', options.tsReactGrammarFileName));
        this.marker = options.marker;
        this.tsGrammarInfo = this.getGrammarInfo(options.tsLanguageName);
        this.tsReactGrammarInfo = this.getGrammarInfo(options.tsReactLanguageName);
    }

    deleteCharAt = (index: number, str: string) => {
        return str.slice(0, index) + str.slice(index + this.marker.length);
    }

    getMarkerLocations = (str: string): number[] => {
        let locations: number[] = [];
        let markerLocation = str.indexOf(this.marker);
        while (markerLocation >= 0) {
            locations.push(markerLocation);
            str = this.deleteCharAt(markerLocation, str);
            markerLocation = str.indexOf(this.marker);
        }
        return locations;
    }

    getInputFile = (oriLines: string[]): string => {
        return "original file\n-----------------------------------\n" +
            oriLines.join("\n") +
            "\n-----------------------------------\n\n";
    }

    getGrammarInfo = (grammarFileName: string) => {
        return "Grammar: " + grammarFileName + "\n-----------------------------------\n";
    }

    initGrammar = (grammar: vt.IGrammar): Grammar => {
        return { grammar };
    }

    tokenizeLine = (grammar: Grammar, line: string) => {
        const lineTokens = grammar.grammar.tokenizeLine(line, grammar.ruleStack);
        grammar.ruleStack = lineTokens.ruleStack;
        return lineTokens.tokens;
    }

    makeTsScope = (scope: string) => {
        return scope.replace(/\.tsx/g, '.ts');
    }

    hasDiffScope = (first: string, second: string) => {
        return this.makeTsScope(first) !== this.makeTsScope(second);
    }

    hasDiffLineToken = (first: vt.IToken, second: vt.IToken) => {
        return first.startIndex != second.startIndex ||
            first.endIndex != second.endIndex ||
            hasDiff(first.scopes, second.scopes, this.hasDiffScope);
    }


    getBaseline = (grammar: Grammar, outputLines: string[]) => {
        const grammarInfo = grammar.grammar === this.tsGrammar ? this.tsGrammarInfo : this.tsReactGrammarInfo;
        return grammarInfo + outputLines.join('\n');
    }

    writeTokenLine = (token: vt.IToken, preTextForToken: string, postTextForToken: string, outputLines: string[]) => {
        let startingSpaces = " ";
        for (let j = 0; j < token.startIndex; j++) {
            startingSpaces += " ";
        }

        let locatingString = "";
        for (let j = token.startIndex; j < token.endIndex; j++) {
            locatingString += "^";
        }
        outputLines.push(startingSpaces + locatingString);
        outputLines.push(startingSpaces + preTextForToken + token.scopes.join(' ') + postTextForToken);
    }

    generateScopes = (text: string, parsedFileName: path.ParsedPath): { markerScopes: string, wholeBaseline: string } => {
        const grammar = parsedFileName.ext === '.tsx' ? this.tsReactGrammar : this.tsGrammar;
        const oriLines = text.split(/\r\n|\r|\n/);

        let mainGrammar = this.initGrammar(grammar);
        let otherGrammar: Grammar = null;
        if (oriLines[0].search(/\/\/\s*@onlyOwnGrammar/i) < 0) {
            otherGrammar = this.initGrammar(grammar === this.tsGrammar ? this.tsReactGrammar : this.tsGrammar);
        }

        let outputLines: string[] = [];
        let cleanLines: string[] = [];
        let baselineLines: string[] = [];
        let otherBaselines: string[] = [];
        let markers = 0;
        let foundDiff = false;
        for (const i in oriLines) {
            let oriLine = oriLines[i];
            let markerLocations = this.getMarkerLocations(oriLine);
            markers += markerLocations.length;
            let line = oriLine.split(this.marker).join('');

            const mainLineTokens = this.tokenizeLine(mainGrammar, line);

            cleanLines.push(line);
            outputLines.push(">" + line);
            baselineLines.push(">" + line);
            otherBaselines.push(">" + line);

            for (let token of mainLineTokens) {
                for (let markerLocation of markerLocations) {
                    if (token.startIndex <= markerLocation && markerLocation < token.endIndex) {
                        this.writeTokenLine(token, '[' + (parseInt(i) + 1) + ', ' + (markerLocation + 1) + ']: ', ' ', outputLines);
                    }
                }

                this.writeTokenLine(token, "", "", baselineLines);
            }

            if (otherGrammar) {
                const otherLineTokens = this.tokenizeLine(otherGrammar, line);
                if (hasDiff(mainLineTokens, otherLineTokens, this.hasDiffLineToken)) {
                    foundDiff = true;
                    for (let token of otherLineTokens) {
                        this.writeTokenLine(token, "", "", otherBaselines);
                    }
                }
            }
        }

        const otherDiffBaseline = foundDiff ? "\n\n\n" + this.getBaseline(otherGrammar, otherBaselines) : "";
        return {
            markerScopes: markers ? (this.getInputFile(oriLines) + this.getBaseline(mainGrammar, outputLines)) : null,
            wholeBaseline: this.getInputFile(cleanLines) + this.getBaseline(mainGrammar, baselineLines) + otherDiffBaseline
        };
    }
}