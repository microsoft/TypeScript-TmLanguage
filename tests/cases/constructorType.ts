type constructorType<T> = new <T>(a: T) => T;
type abstractConstructorType<T> = abstract new <T>(a: T) => T;