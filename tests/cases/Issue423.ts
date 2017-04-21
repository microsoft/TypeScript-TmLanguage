interface Foo {
    bar: string;
}

type T = Foo; // line 5
interface Bar {
    foo: Foo;  // line 7
}