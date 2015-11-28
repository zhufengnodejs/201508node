/**
 * Created by Administrator on 2015/11/23.
 */
/**
 * Created by Administrator on 2015/11/23.
 */


var http=require('http');
var url=require('url');
var mime=require('mime');
var ejs=require('ejs');
var fs=require('fs');
var re=/(.js$)|(.css$)/
var menus = [{name:'豆豉烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'汇源果汁',unit:'瓶'}];

var makeMenu=function(){
    var str='<ul>';
    menus.forEach(function(i){
        str+='<li><a href="'+ i.name+'?unit='+ i.unit+'" >'+ i.name+'</a></li>';
    })
    str+='</ul>'
    return str;
}
var server=http.createServer(function(req,res){
    var urlObj=url.parse(decodeURIComponent(req.url),true);
    var filename=urlObj.pathname.slice(1);
    //console.log(1+mime.lookup(filename))
    res.setHeader('Content-Type',mime.lookup(filename)+';charset="utf-8');
    res.statusCode=200;
   // res.setHeader('Content-Type','text/html;charset=utf-8');
    // res.write('hello');

    if(urlObj.pathname=='/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('menu.html','utf-8',function(err,data){
            //console.log(data);
            var result=ejs.render(data,{memu:makeMenu()},{});

            console.log(result);
            res.write(result);
            res.end();

        });
        // console.log(makeMenu())

        //res.write(makeMenu());
        // res.end(makeMenu);
    }else{
        //res.end('客观，一'+urlObj.query.unit+urlObj.pathname.slice(1))
        res.end();
    }





});
server.listen(8080);
