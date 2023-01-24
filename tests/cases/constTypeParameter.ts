// @onlyOwnGrammar - this has type parameters that would be jsx in tsx files
declare function f1<const T>(x: T): T;
declare function f2<const T, U>(x: T | undefined): T;
declare function f3<const T>(x: T): T[];
declare function f4<const T>(obj: [T, T]): T;
declare function f5<const T>(obj: { x: T, y: T }): T;
declare function f6<const T extends readonly unknown[]>(...args: T): T;
class C1<const T> {
    constructor(x: T) {}
    foo<const U>(x: U) { return x; }
}
const C2 = class <const T> {}
const fx1 = <const T>(x: T) => x;
const fx2 = <const T,>(x: T) => x;
interface I1<const T> { x: T }  // Error
interface I2 {
    f<const T>(x: T): T;
}
type T1<const T> = T;  // Error
type T2 = <const T>(x: T) => T;
type T3 = { <const T>(x: T): T };
type T4 = new <const T>(x: T) => T;
type T5 = { new <const T>(x: T): T };
function set<T, const P extends readonly string[]>(obj: T, path: P, value: GetPath<T, P>) {}