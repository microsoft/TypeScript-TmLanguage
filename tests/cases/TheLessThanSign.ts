function test0^^<A>(): number { return 10; }
function test^^<A, B>() { }
function test2^^<^^T extends { a: () => string }>(param: T) { return param; }
function test21^^<^^T extends { a: () => string }>(param: T) { return param; }
var s0 = test^^<(param?: number, ...others: any[]) ^^=> void, string^^>();
var s0 = test^^<(param?: number, ...others: any[]) ^^=> void, string^^>();
var s1 = test^^<string | number, string^^>();
var s11 = test^^<string, string^^>();
var s12 = test^^<string, { a: () => string }^^>();

var s2 = 1^^<5;
var s3 = 1^^<(5^^>10?1:2);
var f6 = 2^^<test0^^<string^^>();


class View ^^< T ^^>{ }

var qwe: View^^<^^string & number^^> = new View();
var nested = new View ^^< View ^^<string & number^^>^^>();
var withComment = new View ^^</*^^Test Comment*/ string & number /*^^Test Comment2*/^^>();
var complex = 5^^<(function(x) { return 109; })(2);
for (var i=0;i^^<10;i++) { }