/**
 * Created by 吴世界 on 2015/11/30.
 */
var fs=require("fs");
function listener(current,previous){
    if(Date.parse(previous.ctime)===0){
        console.log("文件被创建");
        readwrite();
    }else if(Date.parse(current.ctime)===0){
        console.log("文件被删除");
        remove();
    }else{
        console.log("文件被修改");
        readwrite();
    }
}
function readwrite(){
    fs.readFile("./src/index.html",{enCoding:"utf8"},function(err,data){
        fs.writeFile("./target/index.html",data,{encoding:"utf8"},function(err,data){
            console.log(data);
        });
    });
}
function remove(){
    fs.unlinkSync("./target/index.html");
}
fs.watchFile('src/index.html',{interval:10},listener);