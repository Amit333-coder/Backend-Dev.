const mysql = require('mysql2')
const process = require('process')

const insert ={
    name : process.argv[2],
    city : process.argv[3],
    age : parseInt(process.argv[4])
}

const connection = mysql.createConnection({
    host:"localhost",
    user:"myuser",
    database:"mytestdb",
    password:"mypass"
})
connection.query(`INSERT INTO persons(name,age,city) VALUES(
    '${insert.name}',
    ${insert.age},
    '${insert.city}'
)`,function(err, results){
    if(err){
        console.error(err)
    }
    else{
        console.log(results);
        console.log("inserted successfully")
    }
    connection.close()
})