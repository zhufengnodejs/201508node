var fs = require('fs');
var path = require('path');
function copy(source,destination){
    var buffer = new Buffer(8192);
    var srcFD = fs.openSync(source,'r');
    var destFD = fs.openSync(destination,'w');
    var readSoFar = 0;
    var writeSoFar = 0;
    do{
        var read = fs.readSync(srcFD,buffer,0,buffer.length,readSoFar);
        fs.writeSync(destFD,buffer,0,read,writeSoFar);
        readSoFar+= read;
        writeSoFar+= read;
    }while(read == buffer.length)
    fs.closeSync(srcFD);
    fs.closeSync(destFD);
}

function monitorFile(src,dest) {

    function listener(current, previous) {
        if (Date.parse(previous.ctime) == 0) {
            console.log("监视文件新创建");
            copy(src,dest);
            fs.exists(dest,function(exists){
                console.log("已同步到目标文件");
            })
        } else if(Date.parse(current.ctime)==0){
            console.log("监视文件被删除");
            fs.unlinkSync(dest);
            fs.exists(dest,function(exists){
                if(!exists){
                    console.log("目标文件也删除");
                }
            })
            console.log("同步目录文件")
        } else{
            console.log("监视文件已更新");
            copy(src,dest);
            console.log("更新目标文件")
        }
    }
    fs.watchFile(src, {interval: 1000}, listener);
}

monitorFile('src/index.html','target/index.html');
