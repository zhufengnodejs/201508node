/**
 * Created by 吴世界 on 2015/11/30.
 */
var fs=require("fs");
fs.readFile("./mg.gif",{enCoding:"utf8"},function(err,data){
    fs.writeFile("./mg2.gif",data,{encoding:"utf8"},function(err,data){
        console.log(data);
    });
    fs.unlinkSync("./mg.gif");
});