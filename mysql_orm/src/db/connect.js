const Sequelize = require('sequelize')

const db= new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect: 'mysql'
})
//authentication of database connection
module.exports={
    db
}
