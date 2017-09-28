import fs = require('fs');
import path = require('path');
import yaml = require('js-yaml'); 
import plist = require('plist');

function writePlistFile(grammar: any, fileName: string) {
    const text = plist.build(grammar);
    fs.writeFileSync(fileName, text);
}

function readYaml(fileName: string) {
    const text = fs.readFileSync(fileName, "utf8");
    return yaml.safeLoad(text);
}

function changeTsToTsx(str: string) {
    return str.replace(/\.ts/g, '.tsx');
}

function transformGrammarRule(rule: any, propertyNames: string[], transformProperty: (ruleProperty: string) => string) {
    for (const propertyName of propertyNames) {
        if (typeof rule[propertyName] === 'string') {
            rule[propertyName] = transformProperty(rule[propertyName]);
        }
    }

    for (var propertyName in rule) {
        var value = rule[propertyName];
        if (typeof value === 'object') {
            transformGrammarRule(value, propertyNames, transformProperty);
        }
    }
}

function transformGrammarRepository(grammar: any, propertyNames: string[], transformProperty: (ruleProperty: string) => string) {
    const repository = grammar.repository;
    for (let key in repository) {
        transformGrammarRule(repository[key], propertyNames, transformProperty);
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
    transformGrammarRepository(grammar, ["name", "contentName"], changeTsToTsx);

    // Add repository items
    const repository = grammar.repository;
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

function replacePatternVariables(pattern: string, variableReplacers: VariableReplacer[]) {
    let result = pattern;
    for (const [variableName, value] of variableReplacers) {
        result = result.replace(variableName, value);
    }
    return result;
}

type VariableReplacer = [RegExp, string];
function updateGrammarVariables(grammar: any) {
    if (grammar.variables !== undefined) {
        const variables = grammar.variables;
        delete grammar.variables;
        const variableReplacers: VariableReplacer[] = [];
        for (const variableName in variables) {
            // Replace the pattern with earlier variables
            const pattern = replacePatternVariables(variables[variableName], variableReplacers);
            variableReplacers.push([new RegExp(`{{${variableName}}}`, "gim"), pattern]);
        }
        transformGrammarRepository(
            grammar,
            ["begin", "end", "match"],
            pattern => replacePatternVariables(pattern, variableReplacers)
        );
    }
    return grammar;
}

function buildGrammar() {
    const tsGrammar = updateGrammarVariables(readYaml("../TypeScript.YAML-tmLanguage"));

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