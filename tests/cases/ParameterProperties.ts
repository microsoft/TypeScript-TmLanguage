class A {
	constructor(private a: string, protected b: string, public c: string) {
	}
	foo() {
		return this.a + this.b + this.c;
	}
}