var fs=require("fs");
fs.readFile("test.txt","utf8",function(err,data){
    console.log(data);
});