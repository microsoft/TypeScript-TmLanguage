type Diff1<T, U> = T extends U ? never : T
type TypeName<T> =
    T extends string ? "string" :
        T extends number ? "number" :
            T extends boolean ? "boolean" :
                T extends undefined ? "undefined" :
                    T extends Function ? "function" :
                        "object";
type Extracted<Struct>  = {
	[K in keyof Struct]: Struct[K] extends FooBar ? ExtractFooBar<Struct[K]> : Struct[K];

}