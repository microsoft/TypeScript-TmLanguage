const a = b as
  A | undefined

const a = b satisfies
  A | undefined

const inlineSourceMap = convertSourceMap.fromSource(content)?.toObject() as
  SourceMap | undefined
foo(inlineSourceMap)

const e = (f as
  G);
