const h = {
  setSubProperty: <
      T extends A,
      K extends keyof T,
      J extends keyof T[K]
    >(
      property: K,
      key: J,
      value: T[K][J]
    ) =>  {}
}