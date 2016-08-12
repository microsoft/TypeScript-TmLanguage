class Matrix {

  public elements;

  constructor() {
    this.elements = new Float32Array([1]);
  }

  set(m11: number) : ^^Matrix ^^{
    this.elements[0] = m11;

    ^^return ^^this;
  }
}

class Matrix1 {

  public elements;

  constructor() {
    this.elements = new Float32Array([1]);
  }

  set(m11: number) : ^^Matrix1 ^^{
    this.elements[0] = m11;

    ^^return ^^this;
  }
}
