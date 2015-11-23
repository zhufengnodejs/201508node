//创建一个http服务器
var http = require('http');
/*
* @param request
* @param response
* */
var person = function(request,response){
    var url = request.url;
    response.setHeader('Content-Type','text/html,charset=utf-8');//设置响应头，告诉浏览器以怎么的格式解析，以及格式编码
    if(url == '/'){
        response.end();
    }
};
var server = http.createServer(person);

server.listen(8090,'localhost',function(){
   console.log('start');
});