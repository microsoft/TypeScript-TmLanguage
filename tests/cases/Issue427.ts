function a(): { [key: string]: number } | { [key: string]: number } { throw 1 }

function b(a: { [key: string]: number } | { [key: string]: number }): void { }