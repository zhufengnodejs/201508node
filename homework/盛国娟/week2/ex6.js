var http = require('http');
var url = require('url');
var querystring = require('querystring');
var formidable = require('formidable');
var users = [];
var fs = require('fs');

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        return res.end('404');
    }
    if(pathname == '/'){
        fs.createReadStream('./h5.html').pipe(res);
    }else if(pathname == '/reg'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.setHeader('Content-Type','text/html;charset=utf-8');
            fs.createReadStream(files.avatar.path).pipe(fs.createWriteStream('./upload/'+files.avatar.name));
            res.end("/upload/"+files.avatar.name);
        });
    }else {
        fs.createReadStream('.'+pathname).pipe(res);
    }
});
server.listen(18083);

