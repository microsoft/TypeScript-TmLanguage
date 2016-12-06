 interface Itest {
	a: 'a1' // a1 is good
		| 'a2' // a2 is good
		| 'a3' // a3 is good
	b: {
		a: 'a1'
			| 'a2' // oh , the color is not good !
			| 'a3' // oh , the color is not good !
	}
}