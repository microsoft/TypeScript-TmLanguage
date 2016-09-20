interface A {}
interface B {}
interface C {}

type D = A | B | C
type D1 = A
    | B
    | C
type D3 = 
      A
    | B
    | C
type D2
    = A
    | B
    | C

type E = 'e1' | 'e2' | 'e3'
type E1 = 'e1' 
    | 'e2' 
    | 'e3'
type E2 = 
      'e1' 
    | 'e2' 
    | 'e3'
type E3 
    = 'e1' 
    | 'e2' 
    | 'e3'

type F = A & B & C
type F1 = A
    & B
    & C
type F2 =
      A
    & B
    & C
type F3
    = A
    & B
    & C