type x = string | "aaa" | "bbb" | "ccc" | number;
type x1 = string |
    "aaa" |
    "bbb" | "ccc" | number;
type x2 = string | /*comment*/ "aaa" | "bbb" | "ccc" | number; /*comment*/
type x3 = string | "aaa" | //comment
    "bbb" | "ccc" | number; //comment