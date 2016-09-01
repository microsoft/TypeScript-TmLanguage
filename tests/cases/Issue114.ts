export type BreakpointType = 'line' | 'call' | 'return' | 'exception' | 'conditional' | 'watch'
interface Test {
  type: 'line' | 'call' | 'return';
}