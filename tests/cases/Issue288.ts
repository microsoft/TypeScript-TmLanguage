// Issue 288: "function" in "functionName" gets highlighted.
// Fixed in pull request #289.

function ^^Name(){
}
var AnotherName = function^^(){
}

export function ^^eName(){
}
export var eAnotherName = function^^(){
}

var function^^Name=1;
function^^Name=1;

export var function^^Name2=1;

var export^^Name="hello";
export^^Name2="hello";

var return^^Name=1;
return^^Name+=1;
