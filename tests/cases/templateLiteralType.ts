type EventName<T extends string> = `${T}Changed`;
type Concat<S1 extends string, S2 extends string> = `${S1}${S2}`;
type ToString<T extends string | number | boolean | bigint> = `${T}`;
type T0 = EventName<'foo'>;  // 'fooChanged'
type T1 = EventName<'foo' | 'bar' | 'baz'>;  // 'fooChanged' | 'barChanged' | 'bazChanged'
type T2 = Concat<'Hello', 'World'>;  // 'HelloWorld'
type T3 = `${'top' | 'bottom'}-${'left' | 'right'}`;  // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type T4 = ToString<'abc' | 42 | true | -1234n>;  // 'abc' | '42' | 'true' | '-1234'

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Zip = `${Digit}${Digit}${Digit}${Digit}${Digit}`;  // Error

type GetterName<T extends string> = `get${Capitalize<T>}`;
type Cases<T extends string> = `${Uppercase<T>} ${Lowercase<T>} ${Capitalize<T>} ${Uncapitalize<T>}`;
type T10 = GetterName<'foo'>;  // 'getFoo'
type T11 = Cases<'bar'>;  // 'BAR bar Bar bar'
type T12 = Cases<'BAR'>;  // 'BAR bar BAR bAR'

function test<T extends 'foo' | 'bar'>(name: `get${Capitalize<T>}`) {
    let s1: string = name;
    let s2: 'getFoo' | 'getBar' = name;
}

type MatchPair<S extends string> = S extends `[${infer A},${infer B}]` ? [A, B] : unknown;

type T20 = MatchPair<'[1,2]'>;  // ['1', '2']
type T21 = MatchPair<'[foo,bar]'>;  // ['foo', 'bar']
type T22 = MatchPair<' [1,2]'>;  // unknown
type T23 = MatchPair<'[123]'>;  // unknown
type T24 = MatchPair<'[1,2,3,4]'>;  // ['1', '2,3,4']

type FirstTwoAndRest<S extends string> = S extends `${infer A}${infer B}${infer R}` ? [`${A}${B}`, R] : unknown;

type T25 = FirstTwoAndRest<'abcde'>;  // ['ab', 'cde']
type T26 = FirstTwoAndRest<'ab'>;  // ['ab', '']
type T27 = FirstTwoAndRest<'a'>;  // unknown

type Join<T extends unknown[], D extends string> =
    T extends [] ? '' :
    T extends [string | number | boolean | bigint] ? `${T[0]}` :
    T extends [string | number | boolean | bigint, ...infer U] ? `${T[0]}${D}${Join<U, D>}` :
    string;
type T30 = Join<[1, 2, 3, 4], '.'>;  // '1.2.3.4'
type T31 = Join<['foo', 'bar', 'baz'], '-'>;  // 'foo-bar-baz'
type T32 = Join<[], '.'>;  // ''


type Split<S extends string, D extends string> =
    string extends S ? string[] :
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
    [S];

type T40 = Split<'foo', '.'>;  // ['foo']
type T41 = Split<'foo.bar.baz', '.'>;  // ['foo', 'bar', 'baz']
type T42 = Split<'foo.bar', ''>;  // ['f', 'o', 'o', '.', 'b', 'a', 'r']
type T43 = Split<any, '.'>;  // string[]


type PropType<T, Path extends string> =
    string extends Path ? unknown :
    Path extends keyof T ? T[Path] :
    Path extends `${infer K}.${infer R}` ? K extends keyof T ? PropType<T[K], R> : unknown :
    unknown;

declare function getPropValue<T, P extends string>(obj: T, path: P): PropType<T, P>;
declare const s: string;

const obj = { a: { b: {c: 42, d: 'hello' }}};
getPropValue(obj, 'a');  // { b: {c: number, d: string } }
getPropValue(obj, 'a.b');  // {c: number, d: string }
getPropValue(obj, 'a.b.d');  // string
getPropValue(obj, 'a.b.x');  // unknown
getPropValue(obj, s);  // unknown


type Getters<T> = { [P in keyof T & string as `get${Capitalize<P>}`]: () => T[P] };
type T50 = Getters<{ foo: string, bar: number }>;  // { getFoo: () => string, getBar: () => number }


type Methods<T> = { [P in keyof T as T[P] extends Function ? P : never]: T[P] };
type T60 = Methods<{ foo(): number, bar: boolean }>;  // { foo(): number }

type DoubleProp<T> = { [P in keyof T & string as `${P}1` | `${P}2`]: T[P] }
type T70 = DoubleProp<{ a: string, b: number }>;  // { a1: string, a2: string, b1: number, b2: number }