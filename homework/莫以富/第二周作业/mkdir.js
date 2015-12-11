var path = require('path');
var fs = require('fs');
function makeP(src, fn){
    var arr = path.resolve(src).split(path.sep);
    var i = 1, isExist;
    while(i<arr.length){
        var str='';
        for(var t =0; t<=i; t++){
            if(t==i){
                str += arr[t];
            }else{
                str += arr[t] + path.sep;
            }
        }
        isExist = fs.existsSync(str);
        if(isExist){
            i++;
        }else{
            fs.mkdirSync(str);
        }
    }
}
makeP('./a/b.c/d/e/f');