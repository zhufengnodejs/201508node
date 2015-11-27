/**
 * Created by Administrator on 2015/11/23.
 */


var fs=require('fs');
fs.readFile('./fish','utf-8',function(err,data){
    if(!err){
        console.log(data);
    }
})
