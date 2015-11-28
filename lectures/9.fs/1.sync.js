var fs = require('fs');
/**
 * node.js中，使用fs实现文件的读写，目录的创建，变化的监控
 * 所有的方法都有同步和异步两种实现
 * Sync 结尾的都是同步方法 方法的返回值
 * 不带Sync的都是异步方法 回调
 */
    //<Buffer 72 65 61 64>
var data = fs.readFileSync('./read.txt',{encoding:'utf8'});
console.log(data);//输出buffer

//异步读取文件
fs.readFile('./read.txt',{encoding:'utf8'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

fs.readFile('./read2.txt',{encoding:'utf8'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

function readFile(path,options,callback){
    setTimeout(function(){
        if(error){
            callback('文件不存在');
        }else{
            callback(null,'文件内容');
        }
    },1000);
}
