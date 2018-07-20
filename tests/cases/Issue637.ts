interface I {}

const goodHighlighting = <T extends I>(
  arg: T
) => {
  const a = arg
  return a
}

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