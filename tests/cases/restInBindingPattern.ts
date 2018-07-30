var [...[a, b]] = [0, 1]; 
var [...{0: a, b }] = [0, 1];
function a(...[a = 1, b = true]: string[]) { }
function b(...[...foo]: string[]) { }
function c(...{0: a, length, 3: d}: [boolean, string, number]) { }
function d(...[a, , d]: [boolean, string, number]) { }