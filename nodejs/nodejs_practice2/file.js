// import the file system pkg
const fs = require('fs')


// syncronous means sequiential
function syncroFunction(){                         // here this function giving o/p sequientially
                                                
    console.log('reading file started')            // one after another execution

    const data = fs.readFileSync('./myfile.txt')

    console.log('reading file finished')

    console.log('' + data)



    console.log('math operation started')
    const m1= 10
    const m2= 15
    const mult= m1*m2
    console.log('math operation finished')
    console.log(`multiplication = ${mult}`)
}
syncroFunction()


function asyncroFunction(){                   // here this function gives output parallelly
   
    console.log('reading file started')
    const data = fs.readFile('./myfile.txt' ,(error,data) => {
        console.log('reading file finished')
       
    })

   

    console.log('math operation started')
    const m1= 10
    const m2= 15
    const mult= m1*m2
    console.log('math operation finished')
    console.log(`multiplication = ${mult}`)
}
//asyncroFunction()