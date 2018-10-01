export function computed<K extends string | symbol>(...watchedProps: K[]) {
  if (watchedProps.length < 1) throw new Error('@computed() decorator must have at least one property argument');

  return <V, T extends Record<K, any>>(
    _target: T,
    _prop: string | symbol,
    desc: TypedPropertyDescriptor<V>
  ) => {
    if (!desc.get) throw new Error('The `@computed()` decorator must be used on `get` method.');
    if (desc.set) throw new Error('The `@computed()` decorator cannot be used with `set` method.');
    if (desc.value) throw new Error('The `@computed()` decorator cannot be used with a regular function.');
    // ....
  };
}