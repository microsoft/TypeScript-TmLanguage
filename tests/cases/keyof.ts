class Shape {
    name: string;
    width: number;
    height: number;
    visible: boolean;
}

type T01 = keyof Object;

type T10 = Shape["name"];

type T30 = string[]["length"];
type T31 = string[][number];

type T50 = any[any];
type T51 = any[number];
type T52 = any[string];

type T60 = {}["toString"];
type T61 = []["toString"];

declare let cond: boolean;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
}