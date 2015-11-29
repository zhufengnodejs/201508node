var net = require('net');
var fs = require('fs');
/**
 * 1.先启动TCP服务器
 * 2.监听 客户端需要的文件
 * 3.读取到这个文件发给客户端。并向客户端发送当前的进度。
 **/
var path = require('path');
net.createServer(function(socket){
    //socket.setEncoding('utf8');
    socket.on('data',function(chunk){ //客户端发送过来文件名
       //console.log(path.resolve(chunk));
        //console.log(chunk.length);
        //console.log(fs.readFileSync(path.resolve(chunk)));
        //var filename = chunk.slice(0,chunk.length-2).toString();
        var filename = chunk.toString();
        console.log(filename);
        //if(filename)
        //fs.createReadStream(filename).pipe(socket);
        var size = fs.statSync(filename).size;
        var fd = fs.openSync(filename,'r');
        var buffer = new Buffer(size /10);
        var readSoFar=0;
        for(var i=1;i<=10;i++){
            var len = size-readSoFar<size /10?size-readSoFar:size /10;
            console.log(size,readSoFar,len);
            var read = fs.readSync(fd,buffer,0,len);
            readSoFar += read;
            socket.write(buffer);
            socket.write("percent:"+i*10+'%');
        }
    });
    socket.on('error',function(err){
        console.log(err);
    });
}).listen(8080)