^type ^Callback <^string> = ^(error: Error, value: T)

^f1 = ^foo ^< ^bar(a, b)>; // bar is an expression (function call)

^f2 = ^foo<bar>(a, b){ // bar is a generic function definition
}

^f3 = ^foo^<^bar extends ^{ ^a: () ^=> ^string }>^(a, b){ // as above, but has an object literal type constraint
}

/*^ */

^
^f4 = ^foo ^< ^bar(a, b) ^> ^baz(5); // similar to f1, but with a > operator also

^f5 = ^foo < ^(function(x) { ^return x; } )(5); // IIFE as RHS of expression