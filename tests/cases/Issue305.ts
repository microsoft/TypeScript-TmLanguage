abstract class Base {
    protected abstract topic: string
    constructor(protected wire: Transport, protected token?: string, readonly bar?: boolean) { }
}