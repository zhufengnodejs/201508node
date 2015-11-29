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
//创建服务器
var server = http.createServer(function(req,res){
    //req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    req.on('data',function(chunk){
        console.log(chunk);
    });
    res.setHeader('name','zfpx');
    //res.setHeader('age','6');
   // res.statusCode = 404;
   // res.setHeader();
    res.writeHead(200,{name:'zfpx',age:6,'Content-Type':'text/html;charset=utf-8'});

    res.write('你好');
    res.write('world');
    res.end();


});
server.listen(8080);
