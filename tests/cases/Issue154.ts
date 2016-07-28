class TestCase0 {
^^['123']() {
    this.registerComponent('foo-bar');
  }
}

class TestCase1 {
^^'$'() {
    this.registerComponent('foo-bar');
  }
}

class TestCase2 {
^^[`foo`]() {
    this.registerComponent('foo-bar');
  }
}

class TestCase3 {
^^"foo"() {
    this.registerComponent('foo-bar');
  }
}

class TestCase4 {
^^["foo"]() {
    this.registerComponent('foo-bar');
  }
}

class TestCase5 {
^^foo() {
    this.registerComponent('foo-bar');
  }
}
