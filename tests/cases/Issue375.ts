// @onlyOwnGrammar - As this has type assertion
class Foo {
    constructor(public x: string) {}
}

const foo1 = <Foo> { x: '1' };
const foo2 = <Foo> {
    x: '2'
};
const foo3 =
    <Foo> {
        x: '3'
    };

let foos: Foo[] = <Foo[]> [
    new Foo('4'),
    <Foo>{ x: '5' },
    <Foo>{
        x: '6'
    },
];

let obj = Object.assign(new Foo('7'), <Foo> { x: '8' },
    <Foo>{ x: '9' }, <Foo> { x: '10' }, <Foo>{
        x: '11'
    },
    <Foo>{
        x: '12'
    });