const express = require('express')
const todoRoute = require('./routes/todos')
const app = express()

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/todos',todoRoute)

app.listen(3456)
console.log("the server has been started");
