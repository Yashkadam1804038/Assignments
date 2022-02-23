const express =require('express')
const router = express.Router()

router.post('/', (request,response) => {
    console.log('creating new note')
    response.send()
})

router.put('/:id', (request,response) => {
    console.log('updating new note')
    response.send()
})



module.exports = router