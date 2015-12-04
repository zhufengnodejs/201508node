
/*4.当源文件变化的时候实时往target里同步?
src/index.html target/index.html
监控src/index.html
修改的话重新覆盖，删除的话级联删除*/

var fs = require('fs');
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