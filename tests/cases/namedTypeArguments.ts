const instance1 = new Foo<T = number, U = string>(0, "");
const result1 = foo<T = number, U = string>(0, "");
const tagged1 = tag<T = number, U = string>`tags ${12} ${""}`;
type A = Foo<T = number, U = string>;