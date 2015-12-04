var fs = require('fs');
var path = require('path');

var pathnew = 'test2/test2/test3'
var newdirpath = __dirname;
function makeP(pathname){
    
    var pathArr = pathname.split(path.sep);
 //   var newdirpath = __dirname;
    for(i=0;i<pathArr.length;i++){
        newdirpath = path.join(newdirpath,pathArr[i]);
        if(!(fs.existsSync(newdirpath))){
            fs.mkdir(newdirpath, 0755,function(err){
                if(err){
                    console.log(err);
                }
            });

        }

    }


}

makeP(pathnew);
