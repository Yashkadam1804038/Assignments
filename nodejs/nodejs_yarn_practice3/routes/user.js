const express = require('express')
//const { route } = require('express/lib/application')

// get the express router
// -router used for routing
const router = express.Router()
const db = require('../db')


router.post('/signup', (request,response) => {
    console.log('user is signing up')
    const{firstName, lastName, email, password} = request.body
   
    const query = `insert into task(firstName, lastName, email, password) values(?, ?, ?, ?)`
    const params = [firstName, lastName, email, password]
    db.execute(query, params, (error, result) => {
        if(error){
            console.log(error)
        } else{
            console.log(result)
        }
     
    })
    response.send('done')
   
})

router.post('/signin', (request,response) => {

 
   response.send()
})

router.get('/profile', (request,response) => {
    console.log('returning profile')
    response.send()
})

router.put('/profile', (request,response) => {
    console.log('updating user profile')
    response.send()
})

// export router and use it in server.js
module.exports = router
