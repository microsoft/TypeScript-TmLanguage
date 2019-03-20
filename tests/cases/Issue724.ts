class C {

  a(){return false}
  b(){return false}

  Works(){
    return this.a()
    ? true
    : this.b()
      ? false
      : true;
  }

  doesNotWork = () =>
    this.a()
    ? true
    : this.b()
      ? false
      : true; // fails for apparently any keyword, e.g. "undefined", "null", ...

  alsoWorks = () =>
    this.a() ? true : this.b() ? false : true;

}