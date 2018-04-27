declare module "plist" {
    export function build(json: any): string;
}

declare interface MapLike<T> {
    [s: string]: T;
}

declare interface TmGrammarRuleName {
    name: string;
}

declare interface TmGrammarRule {
    name?: string;
}
declare interface TmGrammarMatchRule extends TmGrammarRule {
    match: string;
    captures: MapLike<TmGrammarRuleName>;
}
declare interface TmGrammarBeginEndRule extends TmGrammarRule {
    contentName?: string;
    begin: string;
    end: string;
    beginCaptures?: MapLike<TmGrammarRuleName>;
    endCaptures?: MapLike<TmGrammarRuleName>;
    patterns: AnyTmGrammarRule[];
}
declare interface TmGrammarIncludeRule extends TmGrammarRule {
    include: string;
}
declare type AnyTmGrammarRule = TmGrammarMatchRule | TmGrammarBeginEndRule | TmGrammarIncludeRule;
declare interface TmGrammarRepositoryPatterns {
    patterns: AnyTmGrammarRule[];
}
declare type TmGrammarRepositaryRule = AnyTmGrammarRule | TmGrammarRepositoryPatterns;
declare interface TmGrammar {
    name: string;
    scopeName: string;
    fileTypes: string[];
    uuid: string;
    variables: MapLike<string>;
    patterns?: AnyTmGrammarRule[];
    repository: MapLike<TmGrammarRepositaryRule>;
}

declare interface TmThemeSetting {
    scope: string;
    settings: { vsclassificationtype: string; };
}
declare interface TmTheme {
    name: string;
    uuid: string;
    settings: TmThemeSetting[];
}