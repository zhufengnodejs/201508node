var fs=require('fs');
/**
 * current 当前的state
 * previous 之前的state
 */
function target(src,tar){
    fs.watchFile(src,{interval:500},function (current,previous){
        if(Date.parse(previous.ctime)==0){
            console.log('文件被创建')
        }else if(Date.parse(current.ctime)==0){
            console.log('文件被删除')
        }else{
            var rs = fs.createReadStream(src);
            var ws=fs.createWriteStream(tar);
            rs.on('data',function(data){
                var flog = ws.write(data)
                if(!flog){
                    rs.pause();
                }
            });

        }
    });
}
//同步两个文件
target('src/index.html','target/index.html')


