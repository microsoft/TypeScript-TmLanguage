interface TestCafeFactory {
  Selector(
    init:
          | string
      | ((...args: any[]) => Node | Node[] | NodeList | HTMLCollection)
      | Selector
      | NodeSnapshot
      | SelectorPromise,
    options?: SelectorOptions
  ): Selector;
}