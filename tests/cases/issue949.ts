export interface PackageJson {
    exports?:
    | string
    | Record<
        string,
        string | { types?: string; require?: string; import?: string }
    >;
}

export function foo() { }