export interface FeatureControl {
    enableCompletionProvider?:
    string
    | {
        processCompletions?(completion: CustomCompletionItem): vsc.CompletionItem[]
    }
}

export interface RegisterLanguageSupportOptions {
    /** handle requesting position in document */
    pathAutoRename?: {
        glob: string
        isSpecCanBeUsed?(specName): boolean | string
    }
}

export interface API {
}