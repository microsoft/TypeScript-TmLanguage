# TypeScript-TmLanguage
[![GitHub Actions CI](https://github.com/microsoft/TypeScript-TmLanguage/workflows/CI/badge.svg)](https://github.com/microsoft/TypeScript-TmLanguage/actions?query=workflow%3ACI)

This repository contains TmLanguage files that are consumed by TypeScript editors and plugins such as [Visual Studio Code](https://github.com/Microsoft/vscode), [The TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin), [Atom TypeScript](https://github.com/TypeStrong/atom-typescript), and possibly others.

Latest version of the grammar can be also found as a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next).

# Contributing

The XML files are generated from the YAML files, so contributors should hand-modify the YAML files, and XML files should only be generated by running build script.

## Install dependencies
``` sh
npm install
```

## Build

Compile the yaml file into the tmLanguage and tmTheme files

``` sh
npm run build:grammar
```

## Tests

``` sh
npm test            # Compiles & runs tests

npm run diff        # Diffs the test baselines with generated one using tool set in environment variable DIFF
npm run accept      # Accepts the test baselines
```
