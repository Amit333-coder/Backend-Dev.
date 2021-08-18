var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var urlencodedParser = bodyParser.urlencoded({extended:false})
app.set('view engine','hbs')


app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html")
})
app.get('/contact',function(req,res){
    //res.sendFile(__dirname+"/contact.html")
    res.render('contact',{qs:req.query})
})


app.post('/contact',urlencodedParser,function(req,res) {
    console.log(req.body)
    res.render('contact',{qs:req.query})
})



//using routing params
app.get('/profile/:id',function(req,res){
    var data={
        age:21,
        job:"ninja",
        hobbies:["cricket","volleyball","guitar"]
    }
    res.render('profile',{person:req.params.id,data:data})
})

app.listen(3000)
console.log("the server is running");