function f(): (x: number) => any {
    return true ? x => f() : x => 0;
}
const x = 0; // no highlight in rest of file