var http = require('http');

http.createServer(function(req, res){
    res.end('Hello HTTP');
}).listen(8080);