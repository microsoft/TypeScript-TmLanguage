type Test = {
    okay: string;
    broken1: readonly { a: string; b: number; }[];
    broken2: readonly { a: number; b: string; }[];
};