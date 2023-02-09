class Foo {
    readonly baz = 
        this.bar() ||
        (this.bar() && 
        this.bar());

    bar() {
        return true;
    }
}