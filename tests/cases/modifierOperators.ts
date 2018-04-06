type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}
type Required<T> = {
    [P in keyof T]-?: T[P];
}
type ReadonlyAndPartial<T> = {
    +readonly [P in keyof T]+?: T[P];
}