// inheritance
// is-a relationship


class person{

    protected name: string
    constructor(name: string){
        this.name = name
    }
    printInfo(){
        console.log(`name = ${this.name}`)
    }
}

// person is super class of employee
// employee is-a person
class Employee extends person{
    protected id: number
    constructor(id: number, name: string){
        super(name)
        this.id = id
    }
    printInfo() {
       console.log(`id = ${this.id}`)
    }
   
}
const p1= new person('person1')
console.log(p1)

const e1= new Employee(1, 'person1')
console.log(e1)