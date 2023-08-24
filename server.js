
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
    res.send(`<h1>${capital}! It's so great to see you!</h1>`)
})






app.get('/tip/:total/:tipPercentage', (req, res)=>{
    console.log(req.params);
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipAmount = total*(tipPercentage/100)
    res.send(`<h1> Your tip should be $${tipAmount} on a $${total} bill with a tip percentage of ${tipPercentage}%</h1>`)
})











app.listen(PORT, ()=>{
    console.log('Server running on port: ' + PORT)
})