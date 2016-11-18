const test = (value: string) => {
    const a = 123;
    const b = {
        [`${value}[]`]: a,
    };
    const c = 123;
    return b;
}