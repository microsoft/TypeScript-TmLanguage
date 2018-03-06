let myFunc = function<T,U>(txt:string,num:number){}

class MyClass {
  myProp = myFunc<number, () => void>("syntax highlight is incorrect", 1);
}

let myProp = myFunc<number, () => void>("syntax highlight is correct here", 1);