/**
 * Created by Administrator on 2015/11/23.
 */
/**
 * Created by Administrator on 2015/11/23.
 */


var http=require('http');
var url=require('url');
var menus = [{name:'豆豉烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'汇源果汁',unit:'瓶'}];

var makeMenu=function(){
    var str='<ul>'
    menus.forEach(function(i){
        str+='<li><a href="'+ i.name+'?unit='+ i.unit+'" >'+ i.name+'</a></li>';
    })
    str+='</ul>'
    return str;
}
var server=http.createServer(function(req,res){
    var urlObj=url.parse(decodeURIComponent(req.url),true);
    console.log(urlObj);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // res.write('hello');

    if(urlObj.pathname=='/'){
       // console.log(makeMenu())
        res.write(makeMenu());
        // res.end(makeMenu);
    }else{
        res.end(' 客官，一'+urlObj.query.unit+urlObj.pathname.slice(1))
    }

    res.end()



});
server.listen(8080);
