// using as identifier
using;
using = a;
using[x];
using[x] = a;
using.x;
using.x = a;
[using];
[using] = a;
({using});
({using} = a);
({using: x});
({using: x} = a);
({x: using});
({x: using} = a);
a = using;
a = using[x];
a = [using];
a = {using};
a = {using: x};
a = {x: using};
var using;
var using = a;
var [using];
var [using] = a;
let using;
let using = a;
let [using];
let [using] = a;
const using;
const using = a;
const [using];
const [using] = a;
function using() {}
function f(using) {}
function f(using = a) {}
function f(using[x]) {}
function f(using[x] = a) {}
function f(a = using) {}
using => {};
(using) => {};
([using]) => {};
({using}) => {};
({using: x}) => {};
({x: using}) => {};
() => using;
async using => {};
async (using) => {};
class using {}
class C extends using {}
class C<using> {}
class C { using; }
class C { static using; }
class C { readonly using; }
class C { declare using; }
class C { abstract using; }
class C { accessor using; }
class C { static accessor using; }
class C { readonly accessor using; }
class C { using() {} }
class C { static using() {} }
class C { abstract using() }
class C { get using() {} }
class C { static get using() {} }
class C { abstract get using(); }
class C { set using() {} }
class C { static set using(v) {} }
class C { abstract set using(v); }
class C { [using]; }
class C { static [using]; }
class C { readonly [using]; }
class C { declare [using]; }
class C { abstract [using]; }
class C { accessor [using]; }
class C { static accessor [using]; }
class C { readonly accessor [using]; }
class C { [using]() {} }
class C { static [using]() {} }
class C { abstract [using]() }
class C { get [using]() {} }
class C { static get [using]() {} }
class C { abstract get [using](); }
class C { set [using]() {} }
class C { static set [using](v) {} }
class C { abstract set [using](v); }
namespace using {}
namespace using.x {}
interface using {}
interface I { [using: string]: using; }
type using = never;
type X<using> = never;
enum using {}
enum E { using };
enum E { a = using };
using: {};
break using;
continue using;
switch (using) {
    case using:
}
export { using };
export { using as x };
export { x as using };
import using from "";
import * as using from "";
import { using } from "";
import { using as x } from "";
import { x as using } from "";
for (using;;);
for (using = a;;);
for (using[x];;);
for (using[x] = a;;);
for (using in a);
for (using of a);

using
x = a;

using
[x] = a;

// using as keyword
using x = a;
using x = a, y = b;

using x
= a;

using x
= a, y = b;

using x = a
    , y = b;

using x = a,
      y = b;

for (using x of a);
for (using x = a;;);
for (using x = a, y = b;;);

for (using x
= a;;);

for (using x
= a, y = b;;);

for (using x = a
         , y = b;;);

for (using x = a,
           y = b;;);

function f() {
    using x = a;
}

(() => {
    using x = a;
})

namespace N {
    using x = a;
}

class C {
    constructor() {
        using x = a;
    }
    method() {
        using x = a;
    }
    get p() {
        using x = a;
    }
    set p(v) {
        using x = a;
    }
    static {
        using x = a;
    }
}

// using as identifier, illegal syntax
using {x};
using {x: y};

// using as keyword, illegal syntax
using x;
using x, y;
using x, [y];
using x, {y};
using x, {y: z};
using x = a, y;
using x = a, [y];
using x = a, {y};
using x = a, {y: z};
declare using x;
declare using x = a;
export using x;
export using x = a;
