export type Segment = [length: number, count: number];
export type SegmentAnnotated = [
    /** 
     * Size of message buffer segment handles
     */
    length: number,
    /**
     * Number of segments handled at once
     */
    count: number
];
declare var c: [number, number];
declare var d: [a: number, b: number];
export type WithOptAndRest = [first: number, second?: number, ...rest: string[]];
export function useState<T>(initial: T): [value: T, setter: (T) => void] {
    return null as any;
}
export type Iter = Func<[step: number, iterations: number]>;
export function readSegment([length, count]: [number, number]) {}
export type RecursiveTupleA = [initial: string, next: RecursiveTupleA];
export type RecusiveRest = [first: string, ...rest: RecusiveRest[]];
export type RecusiveRest2 = [string, ...RecusiveRest2[]];

export type Segment1 = [length: number, number]; // partially named, disallowed
export type List = [item: any, ...any];  // partially named, disallowed
export type Pair = [item: any, any?];  // partially named, disallowed
export type Opt = [element: string?]; // question mark on element disallowed
export type Trailing = [first: string, rest: ...string[]]; // dots on element disallowed
export type OptTrailing = [first: string, rest: ...string[]?]; // dots+question on element disallowed
export type OptRest = [first: string, ...rest?: string[]]; // rest+optional disallowed
export type NonArrayRest = [first: string, ...rest: number]; // non-arraylike rest, disallowed
export type RecusiveRestUnlabeled = [string, ...RecusiveRestUnlabeled];
export type RecusiveRest = [first: string, ...rest: RecusiveRest]; // marked as incorrect, same as above

