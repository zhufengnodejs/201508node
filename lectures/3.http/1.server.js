//一个开店指南
var http = require('http');//需要一个模块，加载 一个模块
/**
 *
 * @param request 请求对象
 * @param response 响应对象
 */
var menus = ['豆豉烤鱼','东坡肘子','水煮牛肉'];
var makeMenu = function(){
    var str = '<ul>';
    menus.forEach(function(menu){
        str+=('<li>'+menu+'</li>');
    })
    str+= '</ul>';
}
//Can't set headers after they are sent.
//如果header已经发给客户端，那么就不能再设置
var person = function(request,response){
    var url = request.url;
    if(url == '/'){
        response.end(makeMenu);
    }
    //console.log(request.headers);//请求的头
    //console.log(request.method);//请求的方法
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
