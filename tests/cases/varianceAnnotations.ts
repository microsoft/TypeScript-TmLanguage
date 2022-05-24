type Provider<out T> = () => T;
type Consumer<in T> = (x: T) => void;
type Mapper<in T, out U> = (x: T) => U;
type Processor<in out T> = (x: T) => T;
type Foo<in T> = {
    x: T;
    f: (x: T) => void;
}
interface Bar<T> {
    // ...
}

interface Bar<out T> {
    // ...
}

interface Bar<in T> {
    // ...
}