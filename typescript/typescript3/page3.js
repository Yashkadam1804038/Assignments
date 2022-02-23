"use strict";
// class modifiers
class Persons {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    printInfo() {
        console.log(`name = ${this.name}`);
        console.log(`address = ${this.address}`);
        console.log(`phone = ${this.phone}`);
    }
}
// create an object
const per = new Persons('person1', 'pune', '+912332');
per.printInfo();
//per.name = 'test'   // by default properties of class are public 
//  cannot change phone as it is private
//per.printInfo()     // we can easily access
