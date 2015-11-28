/**
 * Created by Administrator on 2015/11/27.
 */


var fs=require('fs');
fs.readFile('1.js','utf-8',function(err,data){
    if(!err){
        console.log(data)
    }
})