const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{
    Product.findAll()
    .then((products)=>{
        res.status(201).send(products)
    })
    .catch((err)=>{
        res.status(501).send({error:'could not retreive products'})
    })
})

route.post('/',(req,res)=>{
    //validate the value
    if(isNaN(req.body.price)){
        return res.status().send({
            error:"price is not valid number"
        })
    }

    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    }) 
    .then((product)=>{
        res.status(201).send(product)
    })
    .catch((err)=>{
        res.status(500).send({error:"product not created"})
    })

})



exports =module.exports = route