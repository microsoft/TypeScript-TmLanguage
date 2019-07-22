/*
	Testing Isuue 32: Adding constructor as a support.type keword
*/

interface NewInterface{
	currentData: Data;
	setVal(d: Data)
}


class NewClass implements NewInterface {
	currentData: Data;
	setVal(d: Data){
		this.currentData = d;
	}
	constructor(m: number, n: string){}
}

/*
	Testing comments
*/