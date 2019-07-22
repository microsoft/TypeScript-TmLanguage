/*
Tests for comments in general.

Pull requests:
	- https://github.com/Microsoft/TypeScript-Sublime-Plugin/pull/307
	- https://github.com/Microsoft/TypeScript-Sublime-Plugin/pull/308
*/

var /* comment */ x: string = "yahoo";
var x /* comment */: string = "yahoo";
var x: /* comment */ string = "yahoo";
var x: string /* comment */ = "yahoo";
var x: string = /* comment */ "yahoo";
var x: string = "yahoo" /* comment */;
var x: string = "yahoo"; /* comment */

var /* comment */ x: string = "yahoo"
var x /* comment */: string = "yahoo"
var x: /* comment */ string = "yahoo"
var x: string /* comment */ = "yahoo"
var x: string = /* comment */ "yahoo"
var x: string = "yahoo" /* comment */

/**/ interface i extends i1, i2, i3 {}
interface /**/ i extends i1, i2, i3 {}
interface i /**/ extends i1, i2, i3 {}
interface i extends /**/ i1, i2, i3 {}
interface i extends i1 /**/, i2, i3 {}
interface i extends i1, /**/ i2, i3 {}
interface i extends i1, i2 /**/, i3 {}
interface i extends i1, i2, /**/ i3 {}
interface i extends i1, i2, i3 /**/ {}
/**/ interface /**/ i /**/ extends /**/ i1, /**/ i2, /**/ i3 /**/ {}
/**/ interface /**/ i /**/ extends /**/ i1 /**/ , /**/ i2 /**/ , /**/ i3 /**/ {}

/**/class i extends c1,c2,c3{}
class/**/i extends c1,c2,c3{}
class i/**/extends c1,c2,c3{}
class i extends/**/c1,c2,c3{}
class i extends c1/**/,c2,c3{}
class i extends c1,/**/c2,c3{}
class i extends c1,c2/**/,c3{}
class i extends c1,c2,/**/c3{}
class i extends c1,c2,c3/**/{}
/**/class/**/i/**/extends/**/c1,/**/c2,/**/c3/**/{}
/**/class/**/i/**/extends/**/c1/**/,/**/c2/**/,/**/c3/**/{}

interface KeyValuePair/**/<K, V> extends Array<K | V> { 0: K; 1: V; }
interface KeyValuePair<K, V>/**/extends Array<K | V> { 0: K; 1: V; }
interface KeyValuePair<K, V> extends/**/Array<K | V> { 0: K; 1: V; }
interface KeyValuePair<K, V> extends Array/**/<K | V> { 0: K; 1: V; }
interface KeyValuePair<K, V> extends Array<K | V>/**/{ 0: K; 1: V; }

interface G/**/<extends_, _extends extends Function> {
    f<V extends U>(x: V): V;
}
interface G<extends_, _extends/**/extends Function> {
    f<V extends U>(x: V): V;
}
interface G<extends_, _extends extends/**/Function> {
    f<V extends U>(x: V): V;
}

var x/*comments*/=new String();
var x=/*comments*/new String();
var x= new/*comments*/String();

var x /* comments */ = new String();
var x = /* comments */ new String();
var x = new /* comments */ String();