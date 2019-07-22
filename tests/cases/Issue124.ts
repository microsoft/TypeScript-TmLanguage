/*
	Solving Issue #124, #80, #81
	Adding capability of ternary strings.
*/

let a = true ? true : true;  
let b = true ? true : `this is ${} highlighted`
let c = true ? `hello` : `this ${DEPENDENCY_SEPARATOR}${moduleName} is highlighted`;

var newVar = a ? (b == `hello`) : true;

var debArch = arch === 'x64' ? 'amd64' : 'i386';

/*
	Comment
*/