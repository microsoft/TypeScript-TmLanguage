export function isInOpenInterval(start: number, end: number) {
  return tersible(a => a > start && a < end, () => `(${start}...${end})`)
}
export function isInClosedInterval(start: number, end: number) {
  return tersible(a => a >= start && a <= end, () => `[${start}...${end}]`)
}