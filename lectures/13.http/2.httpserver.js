/**
 * 1.http 超文件传输协议
 * 2. 报文
 * 3. URL是通过统一资源标识 符来标识 的 url(location) uri(identify)
 * 4.http 请求-响应模型
 *
 * @type {exports|module.exports}
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var users = [];
var fs = require('fs');
//创建服务器
var server = http.createServer(function(req,res){
    //req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.createReadStream('./reg.html').pipe(res);
    }else if(pathname == '/reg'){
        var contentType = req.headers['content-type'];
        req.setEncoding('utf8');
        var result = '';
        req.on('data',function(chunk){
            result +=chunk ;
        });
        req.on('end',function(){
            if(contentType == 'application/json'){
                req.body = JSON.parse(result);
            }else if(contentType == 'application/x-www-form-urlencoded'){
                req.body = querystring.parse(result);
            }
            res.end(JSON.stringify(req.body));
        });
    }


});
server.listen(8080);
