// function constructor 
// - used to create a function
function add(p1, p2) {
    console.log("".concat(p1, " + ").concat(p2, " = ").concat(p1 + p2));
}
var subtract = new Function('p1', 'p2', 'console.log("inside subtract function"); console.log(p1 - p2);');
console.log(subtract);
subtract(10, 20);
