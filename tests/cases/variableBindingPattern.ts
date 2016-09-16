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

var {x: k, y: { c: d}, z: [e, { hello }], x } = foo();
var {x: k, y: { c: d}, z: [e, { hello }], x }: {
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
} = foo();

function bar() {
    return <[{ hello: string },string]>[{ hello: "Hello" }, "world"];
}

var [{hello}, world] = bar();
var [{hello}, world]: [{ hello: string }, string] = bar();