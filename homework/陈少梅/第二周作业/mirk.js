/**
 * Created by caomei on 2015/12/5.
 */
/**
 *
 * 3.创建目录,支持在没有父目录的情况下创建子目录
 *
 **/
var path = require('path');
var fs = require('fs');

function makeP(path){

    var pathArr=path.charAt(0)=='/'? path.substr(1).split('/') : path.split('/');

    for(var i=0; i<pathArr.length; i++){
        currentPath = (pathArr.slice(0, i+1)).join('/');
        if(fs.existsSync(currentPath)){
            console.log('父目录已存在')
        }else{
            fs.mkdirSync(currentPath,666)
        }
    }
}

makeP('/b/a/c')