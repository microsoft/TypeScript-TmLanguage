({
    foo():{}{
        let bar;//This line is gray, because tokenization thinks it is inside an object literal scope.
        //The issue goes away if a space is present between the return type and the method block.
    },
    foo: ():{}=>{
        let bar;//This works fine.
    }
});
let bar;
function baz():{}{
    let bar;//This also works fine.
}