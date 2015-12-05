/**
 * Created by caomei on 2015/12/5.
 */

var fs = require('fs');

/**
 * 分步读取，写入 是同步 每次读写8k
 */

function move(src, dest){
    var buff = new Buffer(8*1024);
    var srcFd = fs.openSync(src, 'r');
    var destFd = fs.openSync(dest, 'w');

    var readSoFar = 0;
    var writeSoFar =0;
    do{
        var read = fs.readSync(srcFd,buff,0,buff.length,readSoFar);
        fs.writeSync(destFd,buff,0,read,writeSoFar);
        readSoFar+=read;
        writeSoFar+=read;
    }while(read == buff.length)
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
}

move('./1.png', './2.png');
