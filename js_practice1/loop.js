function f1(){
    
    // traditional for loop
    const num=[10,20,30,40,50]
    for(let i=0; i<num.length; i++)
    {
        console.log(`Value at ${i} is ${num[i]}`)
    }


}
//f1()

// for-of loop
// no control over start and stop
// no access to index
function f2(){
   
    const num1=[10, 20, 30, 40, 50]

    for(const value of num1)
    {
        console.log(`Values = ${value}`)
    }

}
//f2()

// for-in loop
function f3(){

    const num2=[10, 20, 30, 40, 50]

    for(const index in num2)
    {
      console.log(`index is ${index} value is ${num2[index]}`)

    }

}
f3()





