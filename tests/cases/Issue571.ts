const o = {
	["a" +
		"b"]() {
		return 0; // no highlighting!
	},
	'a\
	'() {
		return 0; // no highlighting!
	}
};