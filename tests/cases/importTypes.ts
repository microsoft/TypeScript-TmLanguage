export const x: import("./foo") = { x: 0, y: 0 };
export let y: import("./foo2").Bar.I = { a: "", b: 0 };
export class Bar2 {
    item: {a: string, b: number, c: object};
    constructor(input?: any) {}
}
export let shim: typeof import("./foo2") = {
    Bar: Bar2
};