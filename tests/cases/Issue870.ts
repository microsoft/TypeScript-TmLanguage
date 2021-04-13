const a = [1]
type Test<A> = {
    2: 2;
    3: 3;
}[A extends typeof a ? 2 : 3];
const foo = 30;