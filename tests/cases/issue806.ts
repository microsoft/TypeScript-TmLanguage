class Foo {
    public foo(): boolean {
        return !/[():\w]/.test('foo');
    }

    private bar(): void {}
}