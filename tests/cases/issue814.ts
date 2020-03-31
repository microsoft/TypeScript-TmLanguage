class A{}
class B{}

const a = new A()
const b = new B()

a instanceof A !== b instanceof B
a instanceof A > b instanceof B
a instanceof A & b instanceof B