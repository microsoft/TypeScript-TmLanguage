type Resolve = () => number;

class Test {
  first(values: Map<string, Resolve>): number {
    return values.has('a') ? values.get('a')!() : 0;
  }

  second(): string {
    return 'foo';
  }
}