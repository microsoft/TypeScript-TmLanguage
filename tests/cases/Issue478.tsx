// Before
a = (b: string, c: number) => {
  console.log(b, c);
}

d = (e: string) => (
  f: G<H>
) => {
  console.log(e, f);
};

// After
a = (b: string, c: number) => {
  console.log(b, c);
}