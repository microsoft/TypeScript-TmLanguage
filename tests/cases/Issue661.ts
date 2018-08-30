// breaks when '{' start in a new line behind a '('
const foo = () => (
  {
    num: 1,
    foo: 'foo',
    bar: `bar`,
    //  '=' break all following highlighting
    baz: `baz=${123}`,
  }
);

class TestColor extends Foo {
  public init() {}
}