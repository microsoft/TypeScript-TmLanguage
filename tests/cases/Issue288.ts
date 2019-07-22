// Issue 288: "function" in "functionName" gets highlighted.
// Fixed in pull request #289.

function Name(){
}
var AnotherName = function(){
}

export function eName(){
}
export var eAnotherName = function(){
}

var functionName=1;
functionName=1;

export var functionName2=1;

var exportName="hello";
exportName2="hello";

var returnName=1;
returnName+=1;
