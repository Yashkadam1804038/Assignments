// import http to create web server
const http = require('http')

// create http server
const server = http.createServer((request, response) => {

    console.log('recieved a request')

    // processing time finished
    // send current state of response to the client
    response.end()
})

// start the server
server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
})

// localhost 4000 is client side which is send request to server
// server will send response to request