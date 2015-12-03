/**
 * 2.实现文件的剪切
 * move('read.txt','read2.txt');
 *
 */

var fs = require('fs');

/**
 * 一次写完  快  但是耗费内存  而且当文件size大于内存时不能跑
 */

//function move(ori, target){
//    fs.readFile(ori, function(err, data){
//        if(err){
//            console.error(err);
//        }else{
//            fs.writeFile(target, data, function(err){
//                if(err){
//                    console.error(err);
//                }else{
//                    fs.unlink(ori);
//                }
//            })
//        }
//    })
//}

/**
 * 分步读取，写入  但是是同步 每次跑8k  不用管内存  但是慢
 * 问题：同步的
 */

function move(src, dest){
    var buff = new Buffer(8*1024);
    var srcFd = fs.openSync(src, 'r');
    var destFd = fs.openSync(dest, 'w');

    do{
        var read = fs.readSync(srcFd, buff, 0, buff.length);
        fs.writeSync(destFd, buff, 0, read);
    }while(read == buff.length)

    fs.closeSync(srcFd);
    fs.closeSync(destFd);

    fs.unlink(src);
}

move('./favicon.png', './test/fav.png');