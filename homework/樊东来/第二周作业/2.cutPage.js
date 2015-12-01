var fs  = require('fs');
function cut(src,target){
    var srcFd = fs.openSync(src,'r');
    var targetFd = fs.openSync(target,'w');

    var buff = new Buffer(8*1024);
    do{
        var read = fs.readSync(srcFd,buff,0,buff.length);
        fs.writeSync(targetFd,buff,0,read);
    }while(read==buff.length);

    fs.closeSync(srcFd)
    fs.closeSync(targetFd);
    fs.unlinkSync(src);
}

cut('e.txt','b.txt');



