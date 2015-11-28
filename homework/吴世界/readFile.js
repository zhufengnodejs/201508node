/**
 * Created by 吴世界 on 2015/11/27.
 */
var fs=require("fs");
var http=require("http");
http.createServer(function(request,response){
    fs.readFile('firstwork.txt','utf8',function(err,data){
        response.end(data);
    });
    //var content = fs.readFileSync(filename,'utf8');
    //response.end(content);
}).listen("8080",function(){
    console.log("ok");
});


