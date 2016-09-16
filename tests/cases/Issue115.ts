class Foo {
    bar(a: Foo, b: string) { }
}

function foo(a: Foo, b: string) { }

const bar = function (a: Foo, b: string) { }

const baz = (a: Foo, b: string) => { };

const qux = {
    bar(a: Foo, b: string) { },
    set bar2(x: string) { }
}