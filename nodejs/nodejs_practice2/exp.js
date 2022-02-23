// import express
const express = require('express')

// create an express application
const app =express()

// route
// -mapping of http method and the url
app.get('/', (request, response) => {
    console.log('GET /')

    // same for post put delete
    // restart terminal and perform

    
    response.end()
})
//STAART APPLICATION
 app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
 })
