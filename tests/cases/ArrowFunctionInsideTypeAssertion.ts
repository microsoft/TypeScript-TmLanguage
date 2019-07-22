// @onlyOwnGrammar - As this has type assertion
// Issue: https://github.com/Microsoft/TypeScript-Sublime-Plugin/issues/292

var object = {
    setTransform: <(domNode: HTMLElement, desiredValue: string) => void>null,
    setDisplay: (domNode: HTMLElement, desiredValue: string) => {
        if (domNode.style.display !== desiredValue) {
            domNode.style.display = desiredValue;
        }
    }
}

function f(x: string | ((value: string) => number)) {
    if (typeof x === "string") {
        return +x
    }
    else {
        let f = <(v: string) => number> x
        return f("hello world")
    }
}

