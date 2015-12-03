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
        if(pathname == '/reg'){
            var form = formidable.IncomingForm();
            //var contentType = req.headers['content-type'];
            //req.setEncoding('utf8');
            var content;
            if(hasBody(req)){
                console.log('不是空的')
                //req.on('data', function(data){
                //    content += data;
                //});
                //
                //res.on('end', function(){
                //    console.log('---data---')
                //    console.log(content);
                //    res.end('aaa')
                //});
                form.parse(req,function(err,fields,files){
                    if(err){
                        console.log(err)
                    }else{
                        console.log(files);
                    }
                })
            }else{
                res.end('空的');
            }

            /*form.parse(req, function(err, fields, files){
                console.log(fields);
                console.log(files);
                fs.createReadStream(files.file.path).pipe(fs.createWriteStream('./uploads/'+files.file.name));
                res.setHeader('Content-Type', 'text/html;charset=utf8');
                res.write(JSON.stringify(fields));
                res.end('<img src="/uploads/'+files.file.name+'"/>');
            });*/
        }else{
            console.log('aaa');
            //fs.createReadStream('.'+pathname).pipe(res);
        }
    }
});

function hasBody(req){
    return req.headers['content-length'];
}

server.listen(8080);