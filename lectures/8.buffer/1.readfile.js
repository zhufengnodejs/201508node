var fs = require('fs');

//<Buffer 61 62 63 64 65> 十六进制
fs.readFile('file.txt','utf8',function(err,data){
    console.log(data);
});