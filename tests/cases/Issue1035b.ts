let var1;

interface MyInterface {
  func1<T extends Lowercase<'StringLiteral'>>(): T;
  func2<T extends Lowercase<"StringLiteral">>(): T;
  func3<T extends Lowercase<123>>(): T;
}

let var2;
