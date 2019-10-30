// @onlyOwnGrammar - As this has type parameters that would be jsx in tsx files
const f0 = <T extends any>(p: {
    a: string
    b: T
}) => async () => p.a + p.b


const f1 = <T extends any>({ a, b }: {
    a: string
    b: T
}) => async () => a + b


const f2 = <T extends any>({ a, b }: {
    a: string
    b: T
}) => async () => a + b