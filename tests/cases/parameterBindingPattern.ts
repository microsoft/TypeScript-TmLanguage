function foo() {
    return {
        x: {
            a: 10,
            b: 20
        },
        y: {
            c: "hello",
            d: "world"
        },
        z: <[number, { hello: string }]>[10, { hello: "Hello" }]
    };
}

function foo2({x: k, y: { c: d}, z: [e, { hello }], x } = foo()) {
}
function foo3({x: k, y: { c: d}, z: [e, { hello }], x }: {
    x: {
        a: number;
        b: number;
    };
    y: {
        c: string;
        d: string;
    };
    z: [number, {
        hello: string;
    }];
} = foo()) {
}

function bar() {
    return <[{ hello: string },string]>[{ hello: "Hello" }, "world"];
}

function bar2([{hello}, world] = bar()) {
}
function bar3([{hello}, world]: [{ hello: string }, string] = bar()) {
}