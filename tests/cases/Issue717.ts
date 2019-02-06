/* regex? */
function test() {
   return /"/.test('xxx"xxx');
}

console.log(test());
a = 3 /*test*/ / parseInt(/.+/.exec('3f23fg')[0]);
console.log(a);

b = 1
a = () => b
2 + (b=2), 3
b = 6
console.log(a(),b);
(b)

if (a === 1) {
   b = 2
} else if (a === 2) b = 3
else b = 4
c = 1