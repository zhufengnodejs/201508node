var fs = require('fs');// file system
console.log('a');
var count = 0;
fs.readFile('./fish','utf8',function(err,data){
  console.log(1,'fish');
    if(++count==2){
        eat();
    }
});
fs.readFile('./salt','utf8',function(err,data){
    console.log(2,'salt');
    if(++count==2){
        eat();
    }
});
function eat(){
    console.log('eat fish + salt');
}
console.log('b');
console.log('c');