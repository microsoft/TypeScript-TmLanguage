class Test {
    constructor(
        @inject private test: string,
        @inject("test") private test2: string,
        @inject("test") test3: string,
        public test4: string
    ) { }
}