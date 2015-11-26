var fs = require('fs');// file system
console.log('a');
/**
 * readFile读取文件
 * err 错误对象
 * data 读取到的文件内容
 */
var count = 0;
fs.readFile('./fish','utf8',function(err,data){
  console.log(1,'fish');
    if(++count==2){
        console.log(5);
        eat();
    }
});
fs.readFile('./salt','utf8',function(err,data){
    console.log(2,'salt');
    if(++count==2){
        console.log(5);
        eat();
    }
});

function eat(){
    console.log('eat fish + salt');
}


console.log('b');
console.log('c');