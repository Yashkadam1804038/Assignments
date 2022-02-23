function MyDecorator(constructor: Function){
    console.log('inside my decorator')
}

@MyDecorator
class Person1{

}

const p1= new Person1()
console.log(p1)