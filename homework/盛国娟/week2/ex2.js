var fs = require('fs');
function move(src,dest){
    var buff = new Buffer(8192);
    var srcFD = fs.openSync(src,'r');
    var destFD = fs.openSync(dest,'w');
    var readSoFar =0;
    var writeSoFar = 0;
    do{
        var read = fs.readSync(srcFD,buff,0,buff.length,readSoFar);
        fs.writeSync(destFD,buff,0,read,writeSoFar);
        readSoFar+= read;
        writeSoFar+=read;
    }while(read == buff.length);
    fs.closeSync(srcFD);
    fs.closeSync(destFD);
    fs.unlinkSync(src);
}

move('read1.txt','readmove.txt');
