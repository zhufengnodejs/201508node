var fs = require('fs');
var path = require('path');
function move (sourceSrc,targetSrc) {
    //捕捉异步错误
    process.on('uncaughtException', function(err) {
        console.log(err+'');
    });
    //异步读取文件是否存在
    fs.stat(sourceSrc, function (err, stats) {
        if (err != null && err == 'ENOENT') {
            console.log('要移动的文件不存在');
            return;
        }
        //首先尝试是否能rename
        try {
            fs.renameSync(sourceSrc,targetSrc);
        } catch (e) {  //捕捉异常后，尝试复制后删除
            if(e.code == 'EXDEV' || e.code == 'ENOENT'){
                var rs = fs.createReadStream(sourceSrc);
                var ws;
                var isExist = (function () {  //判断目标路径是否存在这个文件
                    try {
                        if(fs.statSync(targetSrc).isFile()){
                            return true;
                        } else {
                            return false;
                        }
                    } catch (e) {
                        return false;
                    }
                }());
                if(!isExist){
                    ws = fs.createWriteStream(targetSrc);
                    //结束后删除文件
                    ws.on('finish', function () {
                        fs.unlinkSync(sourceSrc);
                    });
                    rs.pipe(ws);
                } else {
                    console.log('文件已经存在啦( ⊙ o ⊙ )');
                }
            }
        }
    });

}

//move('../第一周作业.md','e:/第一周作业.md');