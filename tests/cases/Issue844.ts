declare const key: string;
declare const value: string;
declare const Classes: { [key: string]: any };
const k = value.slice(0, value.indexOf("<"));
new Classes[value.slice(0, value.indexOf("<"))]();
