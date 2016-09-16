function foo() {
    return 'bar';
}

function* foo() {
    yield 'bar';
    yield* ['bar'];
}