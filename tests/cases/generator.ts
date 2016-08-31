module M {
    function* f(s: string): Iterable<any>
    function* f(s: number): Iterable<any>
    function* f(s: any): Iterable<any> { }
}

const a = 10, b = 10;
class c {
    *method() {
    }
    *[a*b]() {
    }
    *'some*string'() {
    }
    * overload(s: string): string
    * overload(n: number): number
    * overload<T extends (string | number)>(sn: T): T {
        return sn;
    }
}