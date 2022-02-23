class person{
    protected name: string
    protected address: string
    protected age: number

    constructor(name: string, address: string, age: number){
        this.name= name
        this.address= address
        this.age= age
    }
   // setters
   setName(name: string): void{
       this.name =name
   }
   
   setAddress(address: string): void{
    this.address =address
   }

   setAge(age: number): void{
     this.age = age
   }


   //getters
   getName(): string{
     return this.name
}

getAddress(): string{
return this.address
}

getAge(): number{
 return  this.age
}

}

const pr1= new person('person1', 'pune', 36)
console.log(`name = ${pr1.getName()}`)
console.log(`address = ${pr1.getAddress()}`)
console.log(`age = ${pr1.getAge()}`)