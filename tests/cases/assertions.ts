declare function isString(value: unknown): value is string;
declare function isArrayOfStrings(value: unknown): value is string[];

const assert: (value: unknown) => asserts value = value => {}

declare function assertIsString(value: unknown): asserts value is string;
declare function assertIsArrayOfStrings(value: unknown): asserts value is string[];
declare function assertDefined<T>(value: T): asserts value is NonNullable<T>;

namespace Debug {
    export declare function assert(value: unknown, message?: string): asserts value;
    export declare function assertDefined<T>(value: T): asserts value is NonNullable<T>;
}

 class Test {
    assert(value: unknown): asserts value {
        if (value) return;
        throw new Error();
    }
    isTest2(): this is Test2 {
        return this instanceof Test2;
    }
    assertIsTest2(): asserts this is Test2 {
        if (this instanceof Test2) return;
        throw new Error();
    }
    assertThis(): asserts this {
        if (!this) return;
        throw new Error();
    }
    bar() {
        this.assertThis();
        this;
    }
    foo(x: unknown) {
        this.assert(typeof x === "string");
        x.length;
        if (this.isTest2()) {
            this.z;
        }
        this.assertIsTest2();
        this.z;
    }
}