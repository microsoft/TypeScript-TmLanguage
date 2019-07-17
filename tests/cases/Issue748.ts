// @onlyOwnGrammar - As this has type assertion
type X = A | B;
type A = string;
type B = number;
function foo<T extends X>(arg: T): T extends B ? number : string {
  if (arg === "A") return <T extends B ? number : never>111;
  return <T extends B ? never : string>"returning a string";
}
foo("A");
foo(1);