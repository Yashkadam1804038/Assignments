const http = require('http')

const server = http.createServer((request,response) => {

   console.log(`method = ${request.method}`)
   console.log(`path = ${request.url}`)
   
   if(request.method == 'GET'){
    if(request.url == '/person'){
        console.log('select * from person')
    } else  if(request.url == '/product'){
        console.log('select * from product')
    }


} else if(request.method == 'POST'){
   if(request.url == '/person'){
       console.log('insert into person')
   } else if(request.url == '/product'){
    console.log('insert into product')
}



} else if(request.method == 'PUT'){
if(request.url == '/person'){
    console.log('update from person')
} else if(request.url == '/product'){
 console.log('update from product')
}

   

} else if(request.method == 'DELETE'){
if(request.url == '/person'){
    console.log('delete from person')
} else if(request.url == '/product'){
 console.log('delete from product')
}  

    response.end()
}
})



server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
})