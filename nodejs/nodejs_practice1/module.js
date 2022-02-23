function add(p1, p2){

    console.log(`${p1} + ${p2} = ${p1+p2}`)
    
}

// module is an object which represent current module
// used for exporting functionality
module.exports ={

    add: add,
}