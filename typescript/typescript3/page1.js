"use strict";
// objects
// constructor function
function Car(model, company, price) {
    this.model = model;
    this.company = company;
    this.price = price;
}
const c1 = new Car('i20', 'hyundai', 1500000);
console.log(c1);
// object literal
// superset of json
const Mobile = {
    model: 'iphone 13',
    company: 'apple',
    price: 100000
};
console.log(Mobile);
// using Object.create
// the myMobile will be created using mobile as base object
//all mobile properties will be copied to the myMobile
const myMobile = Object.create(Mobile);
myMobile.model = 's21';
myMobile.company = 'samsung';
myMobile.price = 95000;
console.log(myMobile);
