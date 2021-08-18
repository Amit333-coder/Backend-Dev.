const route = require('express').Router()

route.use('/users', require('./user'))
route.use('/products',require('./products'))


exports = module.exports= {
    route
}