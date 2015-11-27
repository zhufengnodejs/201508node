/**
 * Created by Administrator on 2015/11/23.
 */


var http=require('http');
var menus = ['豆豉烤鱼','东坡肘子','水煮牛肉'];
var makeMenu=function(){
    var str='<ul>'
    menus.forEach(function(i){
        str+='<li>'+i+'</li>';
    })
    str+='</ul>'
    return str;
}
var server=http.createServer(function(req,res){
    var url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
   // res.write('hello');

    if(url=='/'){
        console.log(makeMenu())
        res.write(makeMenu());
       // res.end(makeMenu);
    }

        res.end()



});
server.listen(8080)
