// 1. Correct highlighting
doSomething = (param, { a = "default" } = {}) => {
    //noop
}

// 2. Incorrect highlighting - limitation of grammar
doSomething = (param, { 
    a = "default" 
} = {}) => {
    //noop
}

// 3. Correct highlighting
doSomething(param, {
    a = "default"
} = {}) {
    //noop
}

// 4. Correct highlighting
doSomething(param, { a = "default" } = {}) {
    //noop
}

// 5. Correct highlighting (notice config module)
doSomething(param, {
    a = config.get("a") 
} = {}) {
    //noop
}

// 6. Correct highlighting (notice config module)
doSomething(param, { a = config.get("a") } = {}) {
    //noop
}

// 7. Incorrect highlighting (notice config module) while 1. does
doSomething = (param, { a = config.get("a")  } = {}) => {
    //noop
}