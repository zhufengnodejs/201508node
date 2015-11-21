//一个开店指南
var http = require('http');//需要一个模块，加载 一个模块
/**
 *
 * @param request 请求对象
 * @param response 响应对象
 */
var person = function(request,response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求的url
    console.log(request.headers);//请求的头

    response.statusCode = 404;
    response.setHeader('name','zfpx');
    response.write('hello');
    response.end();

}
//装修一个自己的分店
var server = http.createServer(person);
//开店营业，告诉别人自己的IP和端口
server.listen(8080,'localhost',function(){
    console.log('服务已启动');
});
