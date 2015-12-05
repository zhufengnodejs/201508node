/**
 * Created by alan on 15/11/28.
 */
var fs=require("fs");

var asc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//
//var b=imgToBase64("./a.jpg",function(data,err){
//                                if(data)
//                                    console.log(data);
//                                else
//                                    console.log(err);
//                            });

function imgToBase64(imgSrc,cb){
    var tStr=[],
        tArray=[],
        base64="",str;
    fs.readFile(imgSrc,function(err,data){

        console.log(data);
        if(!err){
            for(var i=0 ;i<data.length;i++){

                var ss=data[i].toString(2);
                if(ss.length<8){
                    ss=add0(ss);
                }
                //console.log(data[i],":",ss);
                if(ss.length<8){
                    console.log(ss);
                }
                tStr.push(add0(ss));
            }

            str=tStr.join("");
            for(var j=0;j<str.length;j+=6){
                var newStr=str.substr(j,6);
                if(newStr.length==6){
                    var sstr="00"+newStr;
                }
                else{

                }
                tArray.push(parseInt(sstr,2));
            }
             for(var ii=0;ii<tArray.length;ii++){
                base64+=asc[tArray[ii]];
            }
            cb(base64);
        }
        else{
            console.error(err);
        }
    });
    function add0(str){
        if(str.length==8)
            return str;
        else
            return arguments.callee("0"+str);
    }
}

// 复制文件
function move(src,dest){
    var buff = new Buffer(8*1024);
    var srcFd = fs.openSync(src,'r');
    var destFd = fs.openSync(dest,'w');
    var readSoFar = 0;
    var writeSoFar =0;
    do{
        var read = fs.readSync(srcFd,buff,0,buff.length,readSoFar);
        fs.writeSync(destFd,buff,0,read,writeSoFar);
        readSoFar+=read;
        writeSoFar+=read;
    }while(read == buff.length);
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
    fs.unlink(src);
}
//move("1.txt","2.txt");

// 创建目录
function makeP(path){
    var pathArr=path.split("/");
    function getNullPath(index,cb){
        var p=pathArr.slice(0,index).join("/");
        //console.log(p);
        fs.realpath(p,function(err,rp){

           if(rp){
               return getNullPath(index+1,cb);
           }
            else{
               cb.call(this,index);
           }
        });
    }
    getNullPath(1,function(i){
        for(i;i<=pathArr.length;i++){
            console.log(i);
            fs.mkdir(pathArr.slice(0,i).join("/"),0777,function(err){
                if(err){
                    console.log(err);
                }
            });
        }
    });

    }
//makeP("c/b/a");