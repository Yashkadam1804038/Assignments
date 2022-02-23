"use strict";
class person {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    // setters
    setName(name) {
        this.name = name;
    }
    setAddress(address) {
        this.address = address;
    }
    setAge(age) {
        this.age = age;
    }
    //getters
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getAge() {
        return this.age;
    }
}
const pr1 = new person('person1', 'pune', 36);
console.log(`name = ${pr1.getName()}`);
console.log(`address = ${pr1.getAddress()}`);
console.log(`age = ${pr1.getAge()}`);
