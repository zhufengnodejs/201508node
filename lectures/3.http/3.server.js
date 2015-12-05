//一个开店指南
var http = require('http');//需要一个模块，加载 一个模块
var url = require('url');
var fs = require('fs');
var mime = require('mime');//是 一个工具，实现文件类型和内容类型的转换
//var ejs = require('ejs');
/**
 *
 * @param request 请求对象
 * @param response 响应对象
 */
var menus = [{name:'豆豉烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'汇源果汁',unit:'瓶'}];
var makeMenu = function(){
    var str = '<ul>';
    menus.forEach(function(menu){
        str+=('<li><a href="/ss/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>');
    })
    str+= '</ul>';
    return str;
}
//Can't set headers after they are sent.
//如果header已经发给客户端，那么就不能再设置
var person = function(request,response){
    var urlObj = url.parse(decodeURIComponent(request.url),true);//true表示把查询字符串转成对象
    console.log(urlObj);

    if(urlObj.pathname == '/'){
      //1.读取文件
      //2.替换字符串再响应回去
        response.setHeader('Content-Type','text/html;charset=utf-8');
        var content = fs.readFileSync('menu.html','utf8');
        content = content.replace('@@@@@@',makeMenu());
        response.end(content);
    }else if(urlObj.pathname.indexOf('/ss')==0){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.end('客官，一'+urlObj.query.unit+urlObj.pathname.slice(4));
    }else if(urlObj.pathname == '/clock'){
        response.end(new Date().toUTCString());
    }else{
        var filename = urlObj.pathname.slice(1);// menu.js
        response.setHeader('Content-Type',mime.lookup(filename));
        var content = fs.readFileSync(filename,'utf8');
        response.end(content);
    }
}
//装修一个自己的分店
var server = http.createServer(person);
//开店营业，告诉别人自己的IP和端口
server.listen(8080,'localhost',function(){
    console.log('服务已启动');
});


/**
 search: '?unit=ping', 查询字符串
 query: 'unit=ping&age=5', 查询字符串去掉问号
 pathname: '/huiyuan',路径名
 path: '/huiyuan?unit=ping',
 **/