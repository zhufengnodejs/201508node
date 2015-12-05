/**
 * Created by caomei on 2015/12/5.
 */

var fs = require('fs');
/**
 *
 *  current 当前的状态
 *  previous 之前的状态
 */
function listener(current,previous){

    if(Date.parse(previous.ctime)==0&&Date.parse(current.ctime)!=0){
        console.log('文件被创建');
    }else if(Date.parse(current.ctime)==0&&Date.parse(previous.ctime)!=0){
        console.log('文件被删除');
    }else if(Date.parse(current.ctime)!=0&&Date.parse(previous.ctime)!=0){

    }
}

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
        }
    })
}


trackFile('./test/src/4.txt', './test/dest/4.txt', {interval:500});