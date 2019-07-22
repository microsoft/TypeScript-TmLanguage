type Callback <T> = (error: Error, value: T) => any

type Callback<T > = (error: Error, value: T) => any

type Callback = (error: Error, value: T) => any

type Callback<string | (a: number, b: string) => void> = (error: Error, value: T) => any

 type Foo <T > = {

	foo: T,
	bar: number

}