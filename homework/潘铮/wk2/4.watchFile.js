/**
 *
 */

var fs = require('fs');
/**
 *
 * @param current 当前的state
 * @param previous 之前的state
 */
function listener(current,previous){

    if(Date.parse(previous.ctime)==0&&Date.parse(current.ctime)!=0){
        console.log('文件被创建');
    }else if(Date.parse(current.ctime)==0&&Date.parse(previous.ctime)!=0){
        console.log('文件被删除');
    }else if(Date.parse(current.ctime)!=0&&Date.parse(previous.ctime)!=0){
        //console.log('修改了');
        //fs.readFile('./src/')
    }
}

//function listener(current,previous){
//
//    if(Date.parse(previous.ctime)==0){
//        console.log('文件被创建');
//    }else if(Date.parse(current.ctime)==0){
//        console.log('文件被删除');
//    }else{
//        console.log('修改了');
//    }
//}

function trackFile(src, dest, options){
    fs.watchFile(src, options, function(current,previous){
        if(Date.parse(previous.ctime)==0&&Date.parse(current.ctime)!=0){
            console.log('文件被创建');
        }else if(Date.parse(current.ctime)==0&&Date.parse(previous.ctime)!=0){
            console.log('文件被删除');
            fs.unlinkSync(dest);
        }else if(Date.parse(current.ctime)!=0&&Date.parse(previous.ctime)!=0){
            console.log('修改了');
            fs.readFile(src,{},function(err, data){
                fs.writeFile(dest,data);
            });
            //fs.readFile('./src/')
        }
    })
}

//fs.watchFile('./test/src/4.txt',{interval:500},listener);

trackFile('./test/src/4.txt', './test/dest/4.txt', {interval:500});