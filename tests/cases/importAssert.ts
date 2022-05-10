import './0' assert { type: "json" }
import { a, b } from './0' assert { "type": "json" }
import * as foo from './0' assert { type: "json" }
import { a, b } from './0' assert {}
import { a as c, b as d } from './0' assert { a: "a", b: "b", c: "c" }
export {} from './0' assert { type: "json" }
export { a, b } from './0' assert { type: "json" }
export * from './0' assert { type: "json" }
export * as ns from './0' assert { type: "json" }
export { a, b } from './0' assert {}
export { a as c, b as d } from './0' assert { a: "a", b: "b", c: "c" }
export type {} from './0' assert { type: "json" }
export type { I } from './0' assert { type: "json" }
import type { I } from './0'  assert { type: "json" }
import type * as foo from './0' assert { type: "json" }