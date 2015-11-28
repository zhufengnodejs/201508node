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
    if(Date.parse(previous.ctime)==0){
        console.log('文件被创建');
    }else if(Date.parse(current.ctime)==0){
        console.log('文件被删除');
    }else{
        console.log('修改了');
    }
}
fs.watchFile('src/index.html',{interval:1000},listener);