/* Function parameter tests */
function testFunctionParamType(
    m1: string, 
    m2: {},
    m3: any [],
    m4: {a: A, b: B},
    m5: () => void,
    m6: (x:(string), y:[number, string]) => number,
    m7: Array<number>,
    m8: [number, number],
    m9: {a: A, b: B} | [number, number], 
    m10: (() => void) | string[]): number {
    return m6.length;
}

class testClass {
    /* method param type tests */
    public testMethodParamType(
        m1: string, 
        m2: {},
        m3: any [],
        m4: {a: A, b: B},
        m5: () => void,
        m6: (x:(string), y:[number, string]) => number,
        m7: Array<number>,
        m8: [number, number],
        m9: {a: A, b: B} | [number, number], 
        m10: (() => void) | string[]): number {
        return m6.length;
    }
}