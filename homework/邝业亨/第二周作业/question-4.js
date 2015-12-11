var fs = require('fs');

function watchFile (sourceSrc,targetSrc) {
    try {
        var isExist = fs.statSync(sourceSrc);
        if (isExist.isFile()){
            console.log('文件监视启动');
        } else {
            console.log('只能监视单个文件');
            return;
        }
    } catch (e) {
        console.log('你监视的文件不存在');
        return;
    }

    fs.watchFile(sourceSrc, function (current, previous) {
        var curTimestamp = Date.parse(current.ctime);
        var preTimestamp = Date.parse(previous.ctime);
        var difTimestamp = curTimestamp - preTimestamp;
        if(difTimestamp > 0){
            var rs = fs.createReadStream(sourceSrc);
            var ws = fs.createWriteStream(targetSrc);
            rs.pipe(ws);
        }
    });
}

//watchFile('../readme.md','../test.md');