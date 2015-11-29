/**
 * Created by Administrator on 15-11-28.
 */

var fs = require('fs');
var file = fs.readFile('./read.txt',{encoding:'utf8'},function(err,data){
    if(err){

    }else{

    }
});

var img = fs.readFile('a.jpg',function(err,data){
    if(err){

    }else{
        fs.writeFile('b.jpg',data,function(err){
            if(err){
                console.log(err);
            }
        })
    }
});

