var express=require('express')
var app = express()
var todoRoute = require('./routes/todo')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/todos',todoRoute)

app.use('/public',express.static(__dirname+"/public"))

app.get('/hello',function (req,res) {
    res.send('hello')
})

app.listen(4567)
console.log("server has been started");


