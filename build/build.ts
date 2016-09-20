import fs = require('fs');
import path = require('path');
import yaml = require('js-yaml'); 
import plist = require('plist');

function writePlistFile(grammar: any, fileName: string) {
    const text = plist.build(grammar);
    fs.writeFileSync(fileName, text, "utf8");
}

function readYamlGrammar(fileName: string) {
    const text = fs.readFileSync(fileName, "utf8");
    return yaml.safeLoad(text);
}

function fixScopeNames(rule: any) {
    if (typeof rule.name === 'string') {
        rule.name = rule.name.replace(/\.ts/g, '.tsx');
    }
    for (var property in rule) {
        var value = rule[property];
        if (typeof value === 'object') {
            fixScopeNames(value);
        }
    }
}

function changeToTsxGrammar(grammar: any) {
    const tsxUpdates = readYamlGrammar("../TypeScriptReact.YAML-tmLanguage");

    // Update name, file types, scope name and uuid
    for (let key in tsxUpdates) {
        if (key !== "repository") {
            grammar[key] = tsxUpdates[key];
        }
    }

    // Update scope names to .tsx
    const repository = grammar.repository;
    const updatesRepository = tsxUpdates.repository;
    for (let key in repository) {
        fixScopeNames(repository[key]);
    }

    // Add repository items
    for (let key in updatesRepository) {
        switch(key) {
            case "statements":
            case "expression":
                // Update statements/expression
                repository[key].patterns.unshift(updatesRepository[key].patterns[0]);
                break;
            default:
                // Add jsx 
                repository[key] = updatesRepository[key];
        }
    }

    return grammar;
}

function buildGrammar() {
    const tsGrammar = readYamlGrammar("../TypeScript.YAML-tmLanguage");

    // Write TypeScript.tmLanguage
    writePlistFile(tsGrammar, "../TypeScript.tmLanguage");

    // Write TypeScriptReact.tmLangauge
    const tsxGrammar = changeToTsxGrammar(tsGrammar);
    writePlistFile(tsxGrammar, "../TypeScriptReact.tmLanguage");
}

function buildTheme() {
    const tsTheme = readYamlGrammar("../TypeScript.YAML-tmTheme");

    // Write TypeScript.tmTheme
    writePlistFile(tsTheme, "../TypeScript.tmTheme");
}

buildGrammar();
buildTheme();