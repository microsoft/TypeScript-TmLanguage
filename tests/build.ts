/// <reference path="typings/node/node.d.ts" />

import * as vt from 'vscode-textmate/release/main';
import fs = require('fs');
import path = require('path');

var register = new vt.Registry();
var tsGrammar = register.loadGrammarFromPathSync("../TypeScript.tmLanguage");
var tsReactGrammar = register.loadGrammarFromPathSync("../TypeScriptReact.tmLanguage");

const marker = '^';

function deleteCharAt(index: number, str: string) {
    return str.slice(0, index) + str.slice(index + 1);
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

function getScopesAtMarkers(text: string, grammar: vt.IGrammar): string {
    let oriLines = text.split('\n');
    let ruleStack:vt.StackElement[] = undefined;
    let outputLines: string[] = [];
    for (let i in oriLines) {
        let oriLine = oriLines[i];
        let markerLocations = getMarkerLocations(oriLine);
        let line = oriLine.split(marker).join('');
        let lineTokens = grammar.tokenizeLine(line, ruleStack);
        ruleStack = lineTokens.ruleStack;

        for (let token of lineTokens.tokens) {
            for (let markerLocation of markerLocations) {
                if (token.startIndex <= markerLocation && markerLocation < token.endIndex) {
                    outputLines.push('[' + (parseInt(i) + 1) + ', ' + (markerLocation + 1) + ']: ' + token.scopes.join(' ') + ' ');
                }
            }
        }
    }

    return outputLines.join('\n');
}

for (var fileName of fs.readdirSync('cases')) {
    const text = fs.readFileSync(path.join('./cases', fileName), 'utf8');
    let parsedFileName = path.parse(fileName);
    let grammar = parsedFileName.ext === '.tsx' ? tsReactGrammar : tsGrammar;
    if (!fs.existsSync('./generated')){
        fs.mkdirSync('generated');
    }
    let outputFileName = path.join('./generated', parsedFileName.name + '.txt');
    fs.writeFile(outputFileName, getScopesAtMarkers(text, grammar), "utf8");
}
