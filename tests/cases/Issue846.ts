function foo(): number { return 42; }
let bar: ReturnType<typeof foo>;
bar = 1;
