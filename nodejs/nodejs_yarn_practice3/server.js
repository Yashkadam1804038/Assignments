const express = require('express')


const app = express()

// allow user to send the data
// used to read the data from request body
// and convert it into js object
app.use(express.json())

//create routes
const routerUser = require('./routes/user')
const routerNotes = require('./routes/notes')


// add routes
app.use('/user' ,routerUser)
app.use('/note', routerNotes)


app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')

})

