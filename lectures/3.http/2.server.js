var http = require('http');
var url = require('url');
var menus = [
    {name:'豆豉烤鱼',unit:'条'},
    {name:'东坡肘子',unit:'只'},
    {name:'水煮牛肉',unit:'盘'},
    {name:'米饭',unit:'碗'},
    {name:'汇源果汁',unit:'瓶'}
];

var server = http.createServer(person);
var person = function(request,response){
    var urlObj = url.parse(decodeURIComponent(request.url),true);//true表示把查询字符串转成对象
    response.setHeader('Content-Type','text/html;charset=utf-8');
    if(urlObj.pathname == '/'){
        response.end(makeMenu());
    }else{
        response.end('客官，一'+urlObj.query.unit+urlObj.pathname.slice(1));
    }
};
var makeMenu = function(){
    var str = '<ul>';
    menus.forEach(function(menu){
        str+=('<li><a href="/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>');
    })
    str+= '</ul>';
    return str;
};
server.listen(8080,'localhost',function(){
    console.log('服务已启动');
});

