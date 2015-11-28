/**
 * 写入流 把数据写到文件里面去
 *
 */
var fs = require('fs');
var ws = fs.createWriteStream('./write.txt');
for(var i=0;i<100;i++){
    ws.write(i+"");
}


function copy(src,desc){

}