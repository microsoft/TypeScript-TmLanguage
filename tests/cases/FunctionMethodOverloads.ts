/* Function overload tests */
export function testFunctionOverload(p: number): new() => any
export function testFunctionOverload(p: string)
export function testFunctionOverload(p: string [])
export function testFunctionOverload(p: {})
export function testFunctionOverload(p: {a: A, b:B} | string [])
export function testFunctionOverload(p: any): new() => any {
    throw new Error("")
}

export function testFunctionOverloadWithSemicolon(p: number): new () => any;
export function testFunctionOverloadWithSemicolon(p: string);
export function testFunctionOverloadWithSemicolon(p: string[]);
export function testFunctionOverloadWithSemicolon(p: {});
export function testFunctionOverloadWithSemicolon(p: { a: A, b: B } | string[]);
export function testFunctionOverloadWithSemicolon(p: any): new () => any {
    throw new Error("")
}


class testClass {
    /* Function overload tests */
    public testMethodOverload(p: number): new() => any
    public testMethodOverload(p: string)
    public testMethodOverload(p: string [])
    public testMethodOverload(p: {})
    public testMethodOverload(p: {a: A, b:B} | string [])
    public testMethodOverload(p: any): new() => any {
        throw new Error("")
    }

    public testMethodOverloadWithSemicolon(p: number): new () => any;
    public testMethodOverloadWithSemicolon(p: string);
    public testMethodOverloadWithSemicolon(p: string[]);
    public testMethodOverloadWithSemicolon(p: {});
    public testMethodOverloadWithSemicolon(p: { a: A, b: B } | string[]);
    public testMethodOverloadWithSemicolon(p: any): new () => any {
        throw new Error("")
    }
}

interface I {
    foo(): number
    bar(): string;
}

abstract class C {
    abstract foo()
    abstract bar()
}