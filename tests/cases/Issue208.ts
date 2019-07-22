var someVar = new Thing<number, string>('data');
var someVar = makeThing<number, string>('data');

class MyClass {
    static someProp = new Thing<number, string>('data');
    static someProp = makeThing<number, string>('data');

    someProp = new Thing<number, string>('data');
    someProp = makeThing<number, string>('data');
}