interface Foo {
	foo<T = Array<Array<void>>>(): void; // breaks all following lines
	foo(): void;
}

interface Foo2 {
	foo<T extends Array<Array<void>>>(): void; // breaks all following lines
	foo(): void;
}