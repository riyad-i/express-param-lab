
const express = require('express')

const app = express()
const PORT = 3000


app.get('/greeting', (req, res)=>{
    res.send('Howdy stranger!')
})






app.listen(PORT, ()=>{
    console.log('Server running on port: ' + PORT)
})