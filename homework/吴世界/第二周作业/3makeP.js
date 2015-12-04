/**
 * Created by 吴世界 on 2015/11/30.
 */
var fs=require("fs");

function mkdirsSync(dirpath, mode) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        var path;
        dirpath.split("/").forEach(function(dirname){
            if (pathtmp) {
                pathtmp = pathtmp.concat("/"+dirname);
                console.log(pathtmp);
            }else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                fs.mkdir(pathtmp,0666,function(err){
                    console.log("ccc");
                });
            }else{
                console.log("bb");
            }
        });
    }else{
        console.log("aa");
        return true;
    }
}
mkdirsSync("/c/d/e/","0666");