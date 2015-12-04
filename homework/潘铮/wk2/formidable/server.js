var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var url = require('url');
var mime = require('mime');

var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    //console.log(urlObj);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname == '/favicon.ico'){
        res.statusCode = 404;
    }else if(pathname == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else{
        if(pathname == '/upload'){
            var form = formidable.IncomingForm();

            if(hasBody(req)){
                var form = new formidable.IncomingForm(),
                    files = [];
                form.on('file', function(field, file) {
                    //console.log(file.name);
                    files.push([file]);
                });
                form.on('end', function() {

                    files.forEach(function(file){
                        console.log(file[0].path, file[0].name)
                        fs.createReadStream(file[0].path).pipe(fs.createWriteStream('./uploads/'+file[0].name))
                    });
                    console.log('done');
                    res.end('1');
                });
                form.parse(req);
            }else{
                res.end('空的');
            }
        }else{
            res.end('路径不存在')
        }
    }
});

function hasBody(req){
    return req.headers['content-length'];
}

server.listen(8080);