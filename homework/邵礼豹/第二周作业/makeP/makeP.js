//创建文件夹
var fs=require("fs");
var sPath;
function makeP(path){
    var pathString=path.split("/");
    for (var i=0;i<pathString.length;i++){
        if(sPath){
            sPath=sPath+"/"+pathString[i];
        }else{
            sPath=pathString[i];
            if(sPath==="."){
                continue;
            }else if(sPath===".." || sPath===""){
                console.log("请返回上层文件夹创建");
                break
            };
        };
        (function(sPath){
            fs.exists(sPath, function (exists) {
                if(!exists){
                    //console.log(sPath)
                    fs.mkdir(sPath,0666,function(err){
                        if(err){
                            console.log(err);
                        }
                    })
                }
            })
        })(sPath)
    }
}
makeP("a/b/c")