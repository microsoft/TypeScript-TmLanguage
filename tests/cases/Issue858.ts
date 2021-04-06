class Foo {
    bar(): typeof Baz {
        if (true) {
            console.log('Hello World')
        }
        return
    }
}
class X {
    constructor() {
        foo(false ? typeof defaultValue : undefined);
    }
    public foo() { }
}
let c: typeof a & [boolean][];
type Foo = { [K in keyof typeof foo & keyof typeof bar]: 1 };
const foo = {
    get bar(): typeof foo['leet'] {
        return this.leet;
    },
    leet: 1
};