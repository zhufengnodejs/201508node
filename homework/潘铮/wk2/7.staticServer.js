var http = require('http');
var crypto = require('crypto');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer(function(req, res){
    if(req.url == '/favicon.ico'){
        return res.statusCode = 404;
    }else{
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var pathname = req.url.slice(1);
        console.log(pathname);
        if(fs.existsSync(pathname)){
            etagHandler(pathname, req, res);
        }else{
            res.statusCode = 404;
            res.end('文件不存在！');
        }
    }
});

server.listen(8080);

function etagHandler(filename, req, res){
    fs.readFile(filename, function(err, content){
        if(err){
            console.log(err);
        }
        var hash = getHash(content);
        var nonmatch = req.headers['if-none-match'];
        if(hash == nonmatch){
            res.statusCode = 304;
            res.end();
        }else{
            var contentType = mime.lookup(filename);
            res.setHeader('Content-Type', contentType);
            res.setHeader('Etag', hash);
            res.end(content);
        }
    })
}

function getHash(str){
    return crypto.createHash('sha1').update(str).digest('base64');
}