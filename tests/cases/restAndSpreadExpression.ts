function foo(...rest) {
}
// rest
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
[a, b, ...rest] = [1, 2, 3, 4, 5];
var { x, ...{ y, z } } = o;
const [x, ...[y, z]] = ['a', 'b', 'c'];
// spread
let n = { x, y, ...z };
function f<T, U>(t: T, u: U): { id: string, ...T, ...U } {
    return { id: 'id', ...t, ...u };
}
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];