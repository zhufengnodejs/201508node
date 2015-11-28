/**
 * Created by 吴世界 on 2015/11/27.
 */
var http=require("http");
http.createServer(function(request,response){
    response.write("kk");
    response.end();
}).listen(8080,function(){
    console.log("ok");
});

