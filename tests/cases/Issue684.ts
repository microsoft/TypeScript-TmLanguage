// @onlyOwnGrammar - As this has type assertion
function f(p: string) {
    return <number> <unknown> p;
}