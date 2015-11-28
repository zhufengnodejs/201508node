var http=require('http');
http.createServer(function(request,response){
    response.write("this is 8080 file");
    response.end();
}).listen(8080);