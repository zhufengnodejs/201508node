/**
 * 1.超文本传输协议
 * 2. 报文
 * 3. url是通过统一资源标识符来表示的，url(location), uri(标识)
 * 4. http请求-响应模型
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var formidable = require("formidable");
var util = require('util');
//创建服务器
var server = http.createServer(function(request, response){
    var urlobj = url.parse(request.url, true);
    var count = 0;
    if(urlobj.pathname == '/favicon.ico'){
        res.end();
    }else if(urlobj.pathname == '/'){
        response.setHeader("content-type", "text/html; charset=utf-8");
        fs.createReadStream('reg2.html').pipe(response);
    }else if(urlobj.pathname == '/reg'){
        var form = new formidable.IncomingForm();
        form.parse(request, function(err, fields, files){
            var arr = [], oFile, reader, i= 0, count=0;
            for(var filename in files){
                oFile = files[filename];
                reader = fs.createReadStream(oFile.path);
                reader.pipe(fs.createWriteStream("upload/" + oFile.name));
                reader.on('end', function(){
                    count++;
                    if(count == i){
                        response.end(JSON.stringify(arr));
                    }
                });
                i++;
                arr.push("/upload/" + oFile.name);
            }
        });
    }else{
        var contype = mime.lookup(urlobj.pathname);
        if(contype.length > 0){
            response.setHeader("content-type", mime);
            fs.createReadStream(urlobj.pathname).pipe(response);
        }
    }
});

function hasBody(req){
    return req.headers['content-length'];
}
server.listen(8080);
/**
 * head 头里面的host 字段： 127.0.0.1：8080  包含端口号
 */
