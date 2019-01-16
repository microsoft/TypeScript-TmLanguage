function f1(mt: [number, number], rt: readonly [number, number]) {
}

function f2(ma: string[], ra: readonly string[], mt: [string, string], rt: readonly [string, string]) {
}

type ReadWrite<T> = { -readonly [P in keyof T] : T[P] };