/// <reference path="typings/node/node.d.ts" />

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

function getScopesAtMarkers(text: string, grammar: vt.IGrammar): { markerScopes: string, wholeBaseline: string } {
    const oriLines = text.split('\n');
    let ruleStack:vt.StackElement[] = undefined;
    let outputLines: string[] = [];
    let baselineLines: string[] = [];
    let markers = 0;
    for (const i in oriLines) {
        let oriLine = oriLines[i];
        let markerLocations = getMarkerLocations(oriLine);
        markers += markerLocations.length;
        let line = oriLine.split(marker).join('');
        let lineTokens = grammar.tokenizeLine(line, ruleStack);
        ruleStack = lineTokens.ruleStack;

        outputLines.push(">" + line);
        baselineLines.push(">" + line);
        for (let token of lineTokens.tokens) {
            for (let markerLocation of markerLocations) {
                if (token.startIndex <= markerLocation && markerLocation < token.endIndex) {
                    writeTokenLine(token, '[' + (parseInt(i) + 1) + ', ' + (markerLocation + 1) + ']: ', ' ', outputLines);
                }
            }

            writeTokenLine(token, "", "", baselineLines);
        }
    }

    const oriLineText = getInputFile(oriLines);
    const grammarInfo = grammar === tsGrammar ? tsGrammarInfo : tsReactGrammarInfo;
    return {
        markerScopes: markers ? (oriLineText + grammarInfo + outputLines.join('\n')) : null,
        wholeBaseline: oriLineText + grammarInfo + baselineLines.join('\n')
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
