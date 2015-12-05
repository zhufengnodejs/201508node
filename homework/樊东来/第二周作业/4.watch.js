var fs = require('fs');

fs.watchFile('src/index.html',{interval:1000} ,function (current,prev) {
    if(Date.parse(current.ctime)==0){
        console.log('删除');
        if(fs.existsSync('target/index.html')){
            fs.unlinkSync('target/index.html');
        }
    }else if(Date.parse(prev.ctime)==0){
        console.log('创建');
        copy('src/index.html','target/index.html')
    }else{
        console.log('修改');
        copy('src/index.html','target/index.html')
    }
});

function copy(src,target){
    var srcFd = fs.openSync(src,'r');
    var targetFd = fs.openSync(target,'w');
    var buffer = new Buffer(8*1024);
    do{
       var readBytes =  fs.readSync(srcFd,buffer,0,buffer.length);
       fs.writeSync(targetFd,buffer,0,readBytes);
    }while(readBytes==buffer.length);
}