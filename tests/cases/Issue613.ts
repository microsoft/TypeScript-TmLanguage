interface I {
    x: number extends number
        ? string
        : boolean;
}