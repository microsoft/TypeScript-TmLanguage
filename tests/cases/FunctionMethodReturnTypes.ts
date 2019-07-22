/* Function return type tests */
export function testFunctionReturnType1(): string [] { return [""] }
export function testFunctionReturnType2(): {} { return {} }
export function testFunctionReturnType3(): {a: A, b: B} { return {a: {m: "" }, b: {m1: "" }} }
export function testFunctionReturnType4(): [number, number] { return [1, 1] }
export function testFunctionReturnType5(): Array<A> { return [{ m: "" }] }
export function testFunctionReturnType6(): new () => number { throw new Error(""); }
export function testFunctionReturnType7(): (() => number) { throw new Error(""); }
export function testFunctionReturnType8(): (() => number) [] { throw new Error(""); }
export function testFunctionReturnType9(): (() => number) | (() => string) { throw new Error(""); }
export function testFunctionReturnType10(): {a: A, b: B} [] { return [{a: {m: "" }, b: {m1: "" }}] }
export function testFunctionReturnType11(): number | string { return 1 }
export function testFunctionReturnType12(): number | string [] { return }
export function testFunctionReturnType13(): [number, number] | string [] { return [""] }

class TestClass {
    /* method return type tests */
    public testMethodReturnType1(): string [] { return [""] }
    public testMethodReturnType2(): {} { return {} }
    public testMethodReturnType3(): {a: A, b: B} { return {a: {m: "" }, b: {m1: "" }} }
    public testMethodReturnType4(): [number, number] { return [1, 1] }
    public testMethodReturnType5(): Array<A> { return [{ m: "" }] }
    public testMethodReturnType6(): new () => number { throw new Error(""); }
    public testMethodReturnType7(): (() => number) { throw new Error(""); }
    public testMethodReturnType8(): (() => number) [] { throw new Error(""); }
    public testMethodReturnType9(): (() => number) | (() => string) { throw new Error(""); }
    public testMethodReturnType10(): {a: A, b: B} [] { return [{a: {m: "" }, b: {m1: "" }}] }
    public testMethodReturnType11(): number | string { return 1 }
    public testMethodReturnType12(): number | string [] { return }
    public testMethodReturnType13(): [number, number] | string [] { return [""] }
}