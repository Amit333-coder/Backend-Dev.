var http = require('http')
var server = http.createServer(function(req,res) {
    console.log("request was made:"+req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    var obj={
        name:"amit",
        job:"nothing",
        title:"sharma"
    }
        res.end(JSON.stringify(obj));
})


server.listen(3000,"127.0.0.1")
console.log("yo amit,server now listening to port 3000");