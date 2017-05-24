import fs = require('fs');
import path = require('path');
import yaml = require('js-yaml'); 
import plist = require('plist');

function writePlistFile(grammar: any, fileName: string) {
    const text = plist.build(grammar);
    fs.writeFileSync(fileName, text, "utf8");
}

function readYaml(fileName: string) {
    const text = fs.readFileSync(fileName, "utf8");
    return yaml.safeLoad(text);
}

function changeTsToTsx(str: string) {
    return str.replace(/\.ts/g, '.tsx');
}

function fixRuleNames(rule: any, name: string) {
    if (typeof rule[name] === 'string') {
        rule[name] = changeTsToTsx(rule[name]);
    }
}

function fixGrammarScopeNames(rule: any) {
    fixRuleNames(rule, "name");
    fixRuleNames(rule, "contentName");
    for (var property in rule) {
        var value = rule[property];
        if (typeof value === 'object') {
            fixGrammarScopeNames(value);
        }
    }
}

function changeTsToTsxGrammar(grammar: any) {
    const tsxUpdates = readYaml("../TypeScriptReact.YAML-tmLanguage");

    // Update name, file types, scope name and uuid
    for (let key in tsxUpdates) {
        if (key !== "repository") {
            grammar[key] = tsxUpdates[key];
        }
    }

    // Update scope names to .tsx
    const repository = grammar.repository;
    for (let key in repository) {
        fixGrammarScopeNames(repository[key]);
    }

    // Add repository items
    const updatesRepository = tsxUpdates.repository;
    for (let key in updatesRepository) {
        switch(key) {
            case "expression":
                // Update expression
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
    const tsGrammar = readYaml("../TypeScript.YAML-tmLanguage");

    // Write TypeScript.tmLanguage
    writePlistFile(tsGrammar, "../TypeScript.tmLanguage");

    // Write TypeScriptReact.tmLangauge
    const tsxGrammar = changeTsToTsxGrammar(tsGrammar);
    writePlistFile(tsxGrammar, "../TypeScriptReact.tmLanguage");
}

function changeTsToTsxTheme(theme: any) {
    const tsxUpdates = readYaml("../TypeScriptReact.YAML-tmTheme");

    // Update name, uuid
    for (let key in tsxUpdates) {
        if (key !== "settings") {
            theme[key] = tsxUpdates[key];
        }
    }

    // Update scope names to .tsx
    const settings = theme.settings;
    for (let i = 0; i < settings.length; i++) {
        settings[i].scope = changeTsToTsx(settings[i].scope);
    }

    // Add additional setting items
    theme.settings = theme.settings.concat(tsxUpdates.settings);

    return theme;
}

function buildTheme() {
    const tsTheme = readYaml("../TypeScript.YAML-tmTheme");

    // Write TypeScript.tmTheme
    writePlistFile(tsTheme, "../TypeScript.tmTheme");

    // Write TypeScriptReact.thTheme
    const tsxTheme = changeTsToTsxTheme(tsTheme);
    writePlistFile(tsxTheme, "../TypeScriptReact.tmTheme");
}

buildGrammar();
buildTheme();