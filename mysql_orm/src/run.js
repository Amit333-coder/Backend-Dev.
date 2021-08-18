const {db} =require('./db/connection')
const {app} =require('./server')


const start = async ()=>{
    try{
        await db.sync();

        app.listen(3131,()=>{
            console.log("the server has started at http://localhost:3131");
        })

    }
    catch(e){
        console.error(e);
    }
}
start()