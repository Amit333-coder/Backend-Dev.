const {db,Center,Batch,Course,Season,Teacher} = require('./connection.js')

const seed = async() =>{
    try {
        db.sync({alter:true})

        await Center.bulkCreate([
            {id:'pp',name:'pitampura', city:'New Delhi'},
            {id:'no',name:'noida', city:'New Delhi'},
            {id:'st',name:'surat', city:'New Delhi'},
            {id:'pak',name:'pakistan', city:'karachi fateh'}
        ],{
            ignoreDuplicates: true
        })

        await Season.bulkCreate([
            {id:'s',name:'summer'},
            {id:'f',name:'fall'},
            {id:'sp',name:'spring'},
            {id:'w',name:'winter'},

        ],{
            ignoreDuplicates:true
        })

        await Course.bulkCreate([{id:'py',name:'python'},
        {id:'wd',name:'web-development'},
        {id:'js',name:'javascript'},
        {id:'c',name:'c++'},
        {id:'j',name:'java'},
        ],{
            ignoreDuplicates:true
        })
    }
    catch(e){
        console.error(e)
    }
}
seed()