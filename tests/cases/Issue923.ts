// @onlyOwnGrammar - type parameters of arrow

const x = <a extends b> ( args:a ):a => {
  return args;
}

const x = <a>
( args:a ):a => {
  return args;
}

const x = <a extends b>
( args:a ):a => {
  return args;
}