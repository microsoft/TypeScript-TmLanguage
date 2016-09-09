interface X {
    readonly a: number;
    readonly b?: number;
}

class C {
    readonly a: number;
    readonly b = 1;
}

var p: { readonly a: number, b: number }
let xx: { readonly [x: string]: string };