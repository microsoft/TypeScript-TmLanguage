interface I {}

const goodHighlighting2 = <
  T
>(
  arg: T
) => {
  const a = arg
  return a
}

const badHighlighting = <
  T extends I,
>(
  arg: T
) => {
  const a = arg
  return a
}