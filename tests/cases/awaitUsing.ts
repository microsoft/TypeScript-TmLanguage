// await using as expression
await using;
await using = a;
await using[x];
await using[x] = a;
await using.x;
await using.x = a;
[await using];
[await using] = a;
({x: await using});
({x: await using} = a);
a = await using;
a = await using[x];
a = [await using];
a = {x: await using};
async function f(a = await using) {}
async () => await using;
class C extends (await using) {}
class C<using> {}
class C { [await using]; }
class C { static [await using]; }
class C { readonly [await using]; }
class C { declare [await using]; }
class C { abstract [await using]; }
class C { accessor [await using]; }
class C { static accessor [await using]; }
class C { readonly accessor [await using]; }
class C { [await using]() {} }
class C { static [await using]() {} }
class C { abstract [await using]() }
class C { get [await using]() {} }
class C { static get [await using]() {} }
class C { abstract get [await using](); }
class C { set [await using]() {} }
class C { static set [await using](v) {} }
class C { abstract set [await using](v); }
enum E { a = await using };
switch (await using) {
    case await using:
}
for (await using;;);
for (await using[x];;);

await using
x = a;

await
using
x = a;

await using
[x] = a;

await
using
[x] = a;

// await using as keyword
await using x = a;
await using x = a, y = b;

await using x
= a;

await using x
= a, y = b;

await using x = a
    , y = b;

await using x = a,
      y = b;

for (await using x of a);
for (await using x = a;;);
for (await using x = a, y = b;;);

for (await using x
= a;;);

for (await using x
= a, y = b;;);

for (await using x = a
         , y = b;;);

for (await using x = a,
           y = b;;);

function f() {
    await using x = a;
}

(() => {
    await using x = a;
})

namespace N {
    await using x = a;
}

class C {
    constructor() {
        await using x = a;
    }
    method() {
        await using x = a;
    }
    get p() {
        await using x = a;
    }
    set p(v) {
        await using x = a;
    }
    static {
        await using x = a;
    }
}

// await using as expression, illegal syntax
await using {x};
await using {x: y};

// await using as keyword, illegal syntax
await using x;
await using x, y;
await using x, [y];
await using x, {y};
await using x, {y: z};
await using x = a, y;
await using x = a, [y];
await using x = a, {y};
await using x = a, {y: z};
declare await using x;
declare await using x = a;
export await using x;
export await using x = a;
