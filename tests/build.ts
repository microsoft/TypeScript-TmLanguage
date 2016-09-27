import * as vt from 'vscode-textmate/release/main';
import fs = require('fs');
import path = require('path');

const tsGrammarFileName = "TypeScript.tmLanguage"
const tsReactGrammarFileName = "TypeScriptReact.tmLanguage"

const register = new vt.Registry();
const tsGrammar = register.loadGrammarFromPathSync("../" + tsGrammarFileName);
const tsReactGrammar = register.loadGrammarFromPathSync("../" + tsReactGrammarFileName);

const marker = '^^';

function deleteCharAt(index: number, str: string) {
    return str.slice(0, index) + str.slice(index + marker.length);
}

function getMarkerLocations(str: string):  number[] {
    let locations: number[] = [];
    let markerLocation = str.indexOf(marker);
    while (markerLocation >= 0) {
        locations.push(markerLocation);
        str = deleteCharAt(markerLocation, str);
        markerLocation = str.indexOf(marker);
    }
    return locations;
}

function getInputFile(oriLines: string[]): string {
    return "original file\n-----------------------------------\n" +
        oriLines.join("\n") + 
        "\n-----------------------------------\n\n";
}

function getGrammarInfo(grammarFileName: string) {
    return "Grammar: " + grammarFileName + "\n-----------------------------------\n";
}

const tsGrammarInfo = getGrammarInfo(tsGrammarFileName);
const tsReactGrammarInfo = getGrammarInfo(tsReactGrammarFileName);

interface Grammar {
    grammar: vt.IGrammar;
    ruleStack?: vt.StackElement;
}

function initGrammar(grammar: vt.IGrammar): Grammar {
    return { grammar };
}

function tokenizeLine(grammar: Grammar, line: string) {
    const lineTokens = grammar.grammar.tokenizeLine(line, grammar.ruleStack);
    grammar.ruleStack = lineTokens.ruleStack;
    return lineTokens.tokens;
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

function makeTsScope(scope: string) {
    return scope.replace(/\.tsx/g, '.ts');
}

function hasDiffScope(first: string, second: string) {
    return makeTsScope(first) !== makeTsScope(second);
}

function hasDiffLineToken(first: vt.IToken, second: vt.IToken) {
    return first.startIndex != second.startIndex ||
        first.endIndex != second.endIndex ||
        hasDiff(first.scopes, second.scopes, hasDiffScope);
}

function getBaseline(grammar: Grammar, outputLines: string[]) {
    const grammarInfo = grammar.grammar === tsGrammar ? tsGrammarInfo : tsReactGrammarInfo;
    return grammarInfo + outputLines.join('\n');
}

function getScopesAtMarkers(text: string, grammar: vt.IGrammar): { markerScopes: string, wholeBaseline: string } {
    const oriLines = text.split('\n');

    let mainGrammar = initGrammar(grammar);
    let otherGrammar: Grammar = null;
    if (oriLines[0].search(/\/\/\s*@onlyOwnGrammar/i) < 0) {
        otherGrammar = initGrammar(grammar === tsGrammar ? tsReactGrammar : tsGrammar);
    }

    let outputLines: string[] = [];
    let cleanLines: string[] = [];
    let baselineLines: string[] = [];
    let otherBaselines: string[] = [];
    let markers = 0;
    let foundDiff = false;
    for (const i in oriLines) {
        let oriLine = oriLines[i];
        let markerLocations = getMarkerLocations(oriLine);
        markers += markerLocations.length;
        let line = oriLine.split(marker).join('');

        const mainLineTokens = tokenizeLine(mainGrammar, line);

        cleanLines.push(line);
        outputLines.push(">" + line);
        baselineLines.push(">" + line);
        otherBaselines.push(">" + line);

        for (let token of mainLineTokens) {
            for (let markerLocation of markerLocations) {
                if (token.startIndex <= markerLocation && markerLocation < token.endIndex) {
                    writeTokenLine(token, '[' + (parseInt(i) + 1) + ', ' + (markerLocation + 1) + ']: ', ' ', outputLines);
                }
            }

            writeTokenLine(token, "", "", baselineLines);
        }

        if (otherGrammar) {
            const otherLineTokens = tokenizeLine(otherGrammar, line);
            if (hasDiff(mainLineTokens, otherLineTokens, hasDiffLineToken)) {
                foundDiff = true;
                for (let token of otherLineTokens) {
                    writeTokenLine(token, "", "", otherBaselines);
                }
            }
        }
    }

    const otherDiffBaseline = foundDiff ? "\n\n\n" + getBaseline(otherGrammar, otherBaselines) : "";
    return {
        markerScopes: markers ? (getInputFile(oriLines) + getBaseline(mainGrammar, outputLines)) : null,
        wholeBaseline: getInputFile(cleanLines) + getBaseline(mainGrammar, baselineLines) + otherDiffBaseline
    };
}

function writeTokenLine(token: vt.IToken, preTextForToken: string, postTextForToken: string, outputLines: string[]) {
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

const generatedFolder = "generated";

function ensureCleanGeneratedFolder() {
    if (fs.existsSync(generatedFolder)) {
        for (const fileName of fs.readdirSync(generatedFolder)) {
            fs.unlinkSync(path.join(generatedFolder, fileName));
        }
        fs.rmdirSync(generatedFolder);
    }
    fs.mkdirSync(generatedFolder);
}

// Ensure generated folder
ensureCleanGeneratedFolder();

// Generate the new baselines
for (var fileName of fs.readdirSync('cases')) {
    const text = fs.readFileSync(path.join('./cases', fileName), 'utf8');
    const parsedFileName = path.parse(fileName);
    const grammar = parsedFileName.ext === '.tsx' ? tsReactGrammar : tsGrammar;

    const outputFileName = path.join(generatedFolder, parsedFileName.name + '.txt');
    const { markerScopes, wholeBaseline } = getScopesAtMarkers(text, grammar);
    if (markerScopes) {
        fs.writeFile(outputFileName, markerScopes, "utf8");
    }

    const outputBaselineName = path.join(generatedFolder, parsedFileName.name + '.baseline.txt');
    fs.writeFile(outputBaselineName, wholeBaseline, "utf8");
}
