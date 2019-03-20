class Foo {
  prop = () =>
    this.condition
      ? fn(this.value)
      : fn(this.value)
}