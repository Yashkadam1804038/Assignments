// function constructor 
// - used to create a function

function add(p1, p2){
    console.log(`${p1} + ${p2} = ${p1 + p2}`)

}
// add(10,20)

const subtract = new Function('p1','p2', 'console.log("inside subtract function"); console.log(p1 -  p2);')

console.log(subtract)
subtract(10, 20)

// used to create function object
// and write defination inside function object