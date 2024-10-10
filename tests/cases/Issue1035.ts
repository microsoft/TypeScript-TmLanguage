let var1;

interface MyInterface {
  func1<T = Lowercase<'StringLiteral'>>(): T;
  func2<T = Lowercase<"StringLiteral">>(): T;
  func3<T = Lowercase<123>>(): T;
}

let var2;
