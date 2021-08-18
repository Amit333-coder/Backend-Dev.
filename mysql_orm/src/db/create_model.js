const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db= new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect: 'mysql'
})

const Student = db.define('student',{
    name:{type:DataTypes.STRING(40),
    allowNull:false},
    age:{type:DataTypes.INTEGER(2),
        defaultValue:-1,
        allowNull:false
    } 
})

const task = async()=>{
    try{
        await db.sync()
        // insert a student
        await Student.create({
            name:'Some person',
            age:20
        })

    }catch(e){
        console.error(e)
    }
}
task();
//querying is done in sequellize learn from internet


