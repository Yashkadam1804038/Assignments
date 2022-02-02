//push pop function
function f1(){
const num=[10, 20, 30, 40]
console.log(num)

num.push(50)
console.log(num)

num.pop()
console.log(num)
}
//f1() 

function f2(){
    const num1=[10, 20, 30, 40, 50]
    console.log(num1)

    // here 2 is index and 1 is how many values we want to delete
    num1.splice(2,1)
    console.log(num1)

    num1.splice(2,0,35)
   console.log(num1)
}
//f2()
