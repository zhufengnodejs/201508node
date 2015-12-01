
var fs  = require('fs');
var http = require('http');
http.createServer(function (req,res) {
    if(req.url == '/favicon.ico'){
        return res.end('404');
    }
    var path = req.url.slice(1);
    console.log(path);
    matchHandler(path,req,res);
    console.log(1000000);
}).listen(8080);
function matchHandler(path,req,res){
    console.log("11111"+path);
     var lastModified = new Date(req.headers['if-modified-since']);
     fs.stat(path, function (err,stat) {
         console.log(stat);
         if(stat.mtime.getTime()-lastModified.getTime()<=1000){
            res.statusCode=304;
             res.end('');
         }else{
             res.setHeader('Last-Modified',stat.mtime.toGMTString());
             res.writeHead(200);
             fs.createReadStream(path).pipe(res);
         }

     })
}
