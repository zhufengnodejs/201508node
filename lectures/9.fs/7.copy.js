/**
 *
 */
var fs = require('fs');
function copy(src,dest){
    var buff = new Buffer(8*1024);
    var srcFd = fs.openSync(src,'r');
    var destFd = fs.openSync(dest,'w');
    var readSoFar = 0;
    var writeSoFar =0;
    do{
        var read = fs.readSync(srcFd,buff,0,buff.length,readSoFar);
        fs.writeSync(destFd,buff,0,read,writeSoFar);
        readSoFar+=read;
        writeSoFar+=read;
    }while(read == buff.length)//当读满8K的时候，继续循环
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
}

copy('read.txt','read2.txt');

move('read.txt','read2.txt');