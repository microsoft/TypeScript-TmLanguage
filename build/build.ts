import fs = require('fs');
import path = require('path');
import yaml = require('js-yaml'); 
import plist = require('plist');

function writePlistFile(grammar: any, fileName: string) {
    const text = plist.build(grammar);
    fs.writeFileSync(fileName, text, "utf8");
}

function changeToTsxGrammar() {
}

function convertTsGrammar() {
    const text = fs.readFileSync("../TypeScript.YAML-tmLanguage", "utf8");
    const tsGrammar = yaml.safeLoad(text);
    writePlistFile(tsGrammar, "../TypeScript.tmLanguage");
}

convertTsGrammar();