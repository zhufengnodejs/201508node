var net = require('net');
var fs = require('fs');
var socket = net.connect(8080,'localhost');

socket.on('data',function(chunk){
    //console.log(chunk);
    //if(chunk.indexOf("percent:")){
        console.log(chunk.toString());
    //}
});
//socket.pipe(fs.createWriteStream('./1.txt'));
socket.write('1');
