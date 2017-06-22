function* fn1() {}
function * fn2() {}
function *fn3() {}

const foo = {
    * fn4() {},
    *fn5() {},
    fn6: function*() {}, // Incorrect
    fn7: function* () {}, // Incorrect
    fn8: function *() {},
}

class Bar {
    * fn9() {}
    *fn10() {}
    fn11 = function*() {} // Incorrect
    fn12 = function* () {} // Incorrect
    fn13 = function *() {}
}