import fs = require('fs');
import path = require('path');
import yaml = require('js-yaml');
import plist = require('plist');

enum Language {
    TypeScript = "TypeScript",
    TypeScriptReact = "TypeScriptReact"
}

enum Extension {
    TmLanguage = "tmLanguage",
    TmTheme = "tmTheme",
    YamlTmLanguage = "YAML-tmLanguage",
    YamlTmTheme = "YAML-tmTheme"
}

function file(language: Language, extension: Extension) {
    return path.join(__dirname, '..', `${language}.${extension}`);
}

function writePlistFile(grammar: TmGrammar | TmTheme, fileName: string) {
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
        const value = rule[propertyName];
        if (typeof value === 'string') {
            rule[propertyName] = transformProperty(value);
        }
    }

    for (var propertyName in rule) {
        const value = rule[propertyName];
        if (typeof value === 'object') {
            transformGrammarRule(value, propertyNames, transformProperty);
        }
    }
}

function transformGrammarRepository(grammar: TmGrammar, propertyNames: string[], transformProperty: (ruleProperty: string) => string) {
    const repository = grammar.repository;
    for (let key in repository) {
        transformGrammarRule(repository[key], propertyNames, transformProperty);
    }
}

function getTsxGrammar() {
    let variables: MapLike<string>;
    const tsxUpdatesBeforeTransformation = readYaml(file(Language.TypeScriptReact, Extension.YamlTmLanguage)) as TmGrammar;
    const grammar = getTsGrammar(tsGrammarVariables => {
        variables = tsGrammarVariables;
        for (const variableName in tsxUpdatesBeforeTransformation.variables) {
            variables[variableName] = tsxUpdatesBeforeTransformation.variables[variableName];
        }
        return variables;
    });
    const tsxUpdates = updateGrammarVariables(tsxUpdatesBeforeTransformation, variables!);

    // Update name, file types, scope name and uuid
    grammar.name = tsxUpdates.name;
    grammar.scopeName = tsxUpdates.scopeName;
    grammar.fileTypes = tsxUpdates.fileTypes;
    grammar.uuid = tsxUpdates.uuid;

    // Update scope names to .tsx
    transformGrammarRepository(grammar, ["name", "contentName"], changeTsToTsx);

    // Add repository items
    const repository = grammar.repository;
    const updatesRepository = tsxUpdates.repository;
    for (let key in updatesRepository) {
        switch(key) {
            case "expressionWithoutIdentifiers":
                // Update expression
                (repository[key] as TmGrammarRepositoryPatterns).patterns.unshift((updatesRepository[key] as TmGrammarRepositoryPatterns).patterns[0]);
                break;
            default:
                // Add jsx
                repository[key] = updatesRepository[key];
        }
    }

    return grammar;
}

function getTsGrammar(getVariables: (tsGrammarVariables: MapLike<string>) => MapLike<string>) {
    const tsGrammarBeforeTransformation = readYaml(file(Language.TypeScript, Extension.YamlTmLanguage)) as TmGrammar;
    return updateGrammarVariables(tsGrammarBeforeTransformation, getVariables(tsGrammarBeforeTransformation.variables));
}

function replacePatternVariables(pattern: string, variableReplacers: VariableReplacer[]) {
    let result = pattern;
    for (const [variableName, value] of variableReplacers) {
        result = result.replace(variableName, value);
    }
    return result;
}

type VariableReplacer = [RegExp, string];
function updateGrammarVariables(grammar: TmGrammar, variables: MapLike<string>) {
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
    return grammar;
}

function buildGrammar() {
    const tsGrammar = getTsGrammar(grammarVariables => grammarVariables);

    // Write TypeScript.tmLanguage
    writePlistFile(tsGrammar, file(Language.TypeScript, Extension.TmLanguage));

    // Write TypeScriptReact.tmLangauge
    const tsxGrammar = getTsxGrammar();
    writePlistFile(tsxGrammar, file(Language.TypeScriptReact, Extension.TmLanguage));
}

function changeTsToTsxTheme(theme: TmTheme) {
    const tsxUpdates = readYaml(file(Language.TypeScriptReact, Extension.YamlTmTheme)) as TmTheme;

    // Update name, uuid
    theme.name = tsxUpdates.name;
    theme.uuid = tsxUpdates.uuid;

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
    const tsTheme = readYaml(file(Language.TypeScript, Extension.YamlTmTheme)) as TmTheme;

    // Write TypeScript.tmTheme
    writePlistFile(tsTheme, file(Language.TypeScript, Extension.TmTheme));

    // Write TypeScriptReact.thTheme
    const tsxTheme = changeTsToTsxTheme(tsTheme);
    writePlistFile(tsxTheme, file(Language.TypeScriptReact, Extension.TmTheme));
}

buildGrammar();
buildTheme();