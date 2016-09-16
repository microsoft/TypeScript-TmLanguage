var a = async p => {
}
class C {
}
function foo() {
    return <T extends C>(a: T) => {
        return a;
    };
}