var g = function() {console.log(1);};
var x = (function(){}/0); // bad highlighting
var y = (function(){}/0/g);
var z = (function(){}/0/g)/g(function(){}/0/g);