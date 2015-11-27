/**
 * 1. 如何在node中启用一个服务并监听8080端口
*/
var http = require('http');
var server = http.createServer(function(req, res){
    res.setHeader("content-type", "text/html;charset=utf8");
    res.end("内容。。。。");
});
server.listen(8080, "localhost");

