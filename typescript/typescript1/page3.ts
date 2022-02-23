// implicit declaration of object
const person1 = {
    name: 'person1',
    address: 'pune'
}
console.log(person1)


// explicit 
const person2: object = {
    name: 'person2',
    address: 'mumbai'
}
console.log(person2)


// explicit 
// values entered must be matched with datatypes
const person3: {name: string ,address: string} = {
    name: 'person3',
    address: 'pune'
}
console.log(person3)