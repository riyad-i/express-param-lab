
const express = require('express')

const app = express()
const PORT = 3000


app.get('/greeting', (req, res)=>{
    res.send('Howdy stranger!')
})



app.get('/greeting/:name', (req, res)=>{
    console.log(req.params);
    const name = req.params.name
    const capital = name[0].toUpperCase() + name.slice(1)
    res.send(`${capital}! It's so great to see you!`)
})











app.listen(PORT, ()=>{
    console.log('Server running on port: ' + PORT)
})