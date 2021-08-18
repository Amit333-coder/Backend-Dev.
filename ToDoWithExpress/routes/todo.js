var route = require('express').Router()

var todos = []

route.get('/',function(req,res) {
    res.send(todos)
})

route.post('/',function(req,res){
    todos.push({
        task:req.body.task
    })
    res.send(todos)
})


module.exports = route