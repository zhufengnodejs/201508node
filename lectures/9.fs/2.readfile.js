/**
 *
 * O_ReaDONLY只读
 * O_SYNC 同步
 * O_RDWR 可以读也可能写
 * O_TRUNC 截断
 * O_CREAT 创建文件
 * O_WRiteONLY 只写
 * O_EXCL 排它的
 * O_APPEND 追加的附加的
 */
var fs = require('fs');
fs.readFile('./read.txt',{encoding:'utf8',flag:'r'},function(err,data){
    console.log(data);
})
