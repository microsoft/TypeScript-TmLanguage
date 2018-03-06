type ReturnType<T extends Function> = T extends ((...args: any[]) => infer R) | (new (...args: any[]) => infer R) ? R : any;
type ArgumentType<T extends (x: any) => any> = T extends (a: infer A) => any ? A : any;
type X1<T extends { x: any, y: any }> = T extends { x: infer X, y: infer Y } ? [X, Y] : any;
type B1<S> = S extends A1<infer T, infer U> ? [T, U] : never;