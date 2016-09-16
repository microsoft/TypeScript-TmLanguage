/// <reference path="typings/node/node.d.ts" />

import * as vt from 'vscode-textmate/release/main';
import fs = require('fs');
import path = require('path');

var register = new vt.Registry();
var tsGrammar = register.loadGrammarFromPathSync("../TypeScript.tmLanguage");
var tsReactGrammar = register.loadGrammarFromPathSync("../TypeScriptReact.tmLanguage");

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

function getScopesAtMarkers(text: string, grammar: vt.IGrammar): { markerScopes: string, wholeBaseline: string } {
    let oriLines = text.split('\n');
    let ruleStack:vt.StackElement[] = undefined;
    let outputLines: string[] = [];
    let baselineLines: string[] = [];
    let markers = 0;
    for (let i in oriLines) {
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
    return {
        markerScopes: markers ? (oriLineText + outputLines.join('\n')) : null,
        wholeBaseline: oriLineText + baselineLines.join('\n')
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

for (var fileName of fs.readdirSync('cases')) {
    const text = fs.readFileSync(path.join('./cases', fileName), 'utf8');
    let parsedFileName = path.parse(fileName);
    let grammar = parsedFileName.ext === '.tsx' ? tsReactGrammar : tsGrammar;
    if (!fs.existsSync('./generated')){
        fs.mkdirSync('generated');
    }
    let outputFileName = path.join('./generated', parsedFileName.name + '.txt');
    const { markerScopes, wholeBaseline } = getScopesAtMarkers(text, grammar);
    if (markerScopes) {
        fs.writeFile(outputFileName, markerScopes, "utf8");
    }

    let outputBaselineName = path.join('./generated', parsedFileName.name + '.baseline.txt');
    fs.writeFile(outputBaselineName, wholeBaseline, "utf8");
}
