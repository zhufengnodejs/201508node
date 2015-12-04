/**
 *
 * 3.创建目录,支持在没有父目录的情况下创建子目录
 *
 **/
var path = require('path');
var fs = require('fs');

function makeP(p){
    var pathArr = p.split('/');

    for(var i=0; i<pathArr.length; i++){
        currentP = (pathArr.slice(0, i+1)).join('/');
        console.log(currentP);
        if(fs.existsSync(currentP)){
            console.log('is already there')
        }else{
            fs.mkdirSync(currentP,666)
        }
    }
}
