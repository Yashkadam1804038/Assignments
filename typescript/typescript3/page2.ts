// class using object

class Person{
    name: string
    address: string
    phone: string
    constructor(name: string, address: string, phone: string){
        this.name = name
        this.address = address
        this.phone =phone
    }

    printInfo(){
        console.log(`name = ${this.name}`)
        console.log(`address = ${this.address}`)
        console.log(`phone = ${this.phone}`)
    }
}

// create an object
const p1 = new Person('person1', 'pune', '+912332')
p1.printInfo()