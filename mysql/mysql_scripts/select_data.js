const mysql = require('mysql2')
const process = require('process')



const connection = mysql.createConnection({
    host:"localhost",
    user:"myuser",
    database:"mytestdb",
    password:"mypass"
})
connection.query(`SELECT * FROM persons`,function(err, results,fields){
    if(err){
        console.error(err)
    }
    else{
        console.log(results);
        console.log(fields);
    }
    connection.close()
})