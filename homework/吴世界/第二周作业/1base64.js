/**
 * Created by 吴世界 on 2015/11/30.
 */
var fs=require("fs");
var content=fs.readFile("./mg2.gif",function(err,data){
    if(err){
        console.log("404");
    }else{
        var buf1=new Buffer(data).toString("base64");
        console.log(buf1);
    }
});