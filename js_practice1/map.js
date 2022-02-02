

// map returns all values after processing
// filter returns all values which need

function f1(){
    
    const num=[1, 2, 3, 4, 5]
   
    // calculate square of array
    const square=num.map((value) => value ** 2 )

    console.log(num)
    console.log(square)
}
 //f1()

 function f2(){

    const num1=[1,2,3,4,5,6,7,8,9]

    //even numbers
    const even=num1.map( (value) => { return value % 2 == 0})

    console.log(num1)
    console.log(even)  // this returns boolean expression
 }
// f2()

 function f3(){

    const num1=[1,2,3,4,5,6,7,8,9]

    //even numbers
    const even=num1.filter( (value) => { return value % 2 == 0})

    console.log(num1)
    console.log(even)  // instead map use filter in this case
 }
 //f3()

 function f4(){

    const num2=[1, 2, 3, 4, 5, 6, 7, 8, 9]

    //squares of even numbers
    const even=num2.filter( (value) => value % 2 ==0)
    const square=even.map( (value) => value ** 2)

    console.log(num2)
    console.log(square)
    
 }
 f4()