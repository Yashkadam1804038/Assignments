"use strict";
// inheritance
// is-a relationship
class person {
    constructor(name) {
        this.name = name;
    }
    printInfo() {
        console.log(`name = ${this.name}`);
    }
}
// person is super class of employee
// employee is-a person
class Employee extends person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    printInfo() {
        console.log(`id = ${this.id}`);
    }
}
const p1 = new person('person1');
console.log(p1);
const e1 = new Employee(1, 'person1');
console.log(e1);
