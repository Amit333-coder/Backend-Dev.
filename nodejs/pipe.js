var fs = require('fs')
/*
var myReadStream = fs.createReadStream(__dirname+"/myFile.txt")
var myWriteStream = fs.createWriteStream(__dirname +"/PipedFile.txt")

myReadStream.pipe(myWriteStream);
*/

var http = require('http')
var server = http.createServer(function(req,res) {
    console.log("request was made:"+req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});

    var myReadStream = fs.createReadStream(__dirname+"/index.html")

    myReadStream.pipe(res);

})


server.listen(3000,"127.0.0.1")
console.log("yo amit,server now listening to port 3000");