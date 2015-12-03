var fs = require('fs');
var path = require('path');
function makeP(p){
    var content  = p.split(path.sep);
    console.log(content);
    for(var i = 0; i<content.length;i++){
        //console.log(content[i]);
        var temp = content.slice(0,i+1);
        temp = temp.join(path.sep);
        var flag = fs.existsSync(temp)
        if(!flag){
            fs.mkdir(temp, function () {
                console.log('1');
            });
        }
    }
}
makeP('a/b/c/d')