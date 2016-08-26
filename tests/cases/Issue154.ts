class TestCase {
    ['foo']() {
        this.registerComponent('foo-bar');
    }
}

class TestCase2 {
    foo() {
        this.registerComponent('foo-bar');
    }
}