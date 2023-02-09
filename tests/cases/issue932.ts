class A {
    f = () => 
        false &&
        (false) ||
        (this.f);
}