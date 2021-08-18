const express = require('express')
const app = express();
const {Center,Season,Course,Batch}= require('./db/connection')
console.log(`${Season}`);
const path = require('path')

app.set('view engine','hbs')
app.set('views',path.resolve(__dirname,'../views'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/batchcode',async(req,res)=>{
    try{
        const centers = await Center.findAll()
        const season = await Season.findAll()
        const courses = await Course.findAll()
        const years = [2021,2022,2023,2024]
        res.render('batchcode',{
            centers,season,courses,years
        })
    }catch(e){
        console.error(e);
    }
})

app.post('/batchcode',async(req,res)=>{
    let batchcode =""
    batchcode += req.body.course
    batchcode += req.body.center
    batchcode += req.body.year.substr(2)
    batchcode += req.body.season
    batchcode += req.body.batchno

    try{

        const batch=  await Batch.create({
            id:batchcode
        })
        console.log(batch)

    }
    catch(e){
        console.error(e);
    }


    res.send(batchcode)

})
app.get('/batches',async(req,res)=>{
    try{
        const batches =await Batch.findAll()
        res.render('batches',{batches})
    }catch(e){
        console.error(e);
    }
})



module.exports={
    app
}