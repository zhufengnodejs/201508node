//创建一个http服务器
var http = require('http');
/*
* @param request
* @param response
* */
var person = function(request,response){
    console.log(request.method);//请求方法
    console.log(request.url);//请求的URL
    console.log(request.headers);//
    response.statusCode = 404;
    response.setHeader('name','LISHANGXI');
    response.write('hello');
    response.write('world');
    response.end();
};
var server = http.createServer(person);

server.listen(8090,'localhost',function(){
   console.log('start');
});