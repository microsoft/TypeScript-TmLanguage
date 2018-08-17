const instance1 = new Foo<*, *>(0, "");
const result1 = foo<*, string>(0, "");
const tagged1 = tag<*, string>`tags ${12} ${""}`;
type A = Foo<*, string>;
const instance2 = new Foo<number, *>(0, "");
const result2 = foo<number, *>(0, "");
const tagged2 = tag<number, *>`tags ${12} ${""}`;
type A2 = Foo<string, *>;