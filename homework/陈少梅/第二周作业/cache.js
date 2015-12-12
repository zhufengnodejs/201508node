/**
 * Created by caomei on 2015/12/5.
 */
var http = require('http');
var fs = require('fs');
var crypto = require('crypto');

http.createServer(function(req,res){
    if(req.url =='/favicon.ico'){
        return res.end('404');
    }
    var filename = req.url.slice(1);//获取访问的文件名
    if(fs.existsSync(pathname)){
        etagHandler(pathname, req, res);
    }else{
        res.statusCode = 404;
        res.end('文件不存在');
    }
}).listen(8088);

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