// @onlyOwnGrammar - since this example has slightly different scopes because of how cast expression works
const goodHighlighting = <T extends I>(
  arg: T
) => {
  const a = arg
  return a
}