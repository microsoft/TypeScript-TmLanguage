// @onlyOwnGrammar - As this has jsx
class Baz { }

class F {
	public *foo() {
		yield <Baz />;
	}
	
	public fuu() {
		return <Baz />;
	}
}