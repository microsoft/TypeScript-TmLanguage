type Foo = string

(async () => {
	let foo: string

	try {
		foo = "hello"
	} catch (error) {
		// Nothing
	}
})()