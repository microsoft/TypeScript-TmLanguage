class A1 {
	b() {
		let d;
		d.default = 1;
	}

	private static c() {
	}
}

class A2 {
	b() {
		let d;
		d.case = 1
	}

	private static c() {
	}
}

class A3 {
	b() {
		let d
		d.default = 1
		switch (d.default) {
			case 1:
			case 2:
			default:
				break;
		}
	}

	private static c() {
	}
}

class A4 {
	b() {
		let d
		d.case = 1
		switch (d.default) {
			case 1:
			case 2:
			default:
				break;
		}
	}

	private static c() {
	}
}