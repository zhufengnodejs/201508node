/**
 *
 * 1. 把任意一张文件转成base64编码
 * 封装一个方法 var base64 = function(path); console.log(base64);
 *
 **/

var fs = require('fs');

var base64 = function(path){
    var contentBuf = fs.readFileSync(path);
    var lookUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var binContent = '';

    contentBuf.forEach(function(item){
        var numOf0 = 8 - (item.toString(2).length);

        for(var j=0; j<numOf0; j++){
            binContent += '0';
        }
        binContent += ''+item.toString(2);

    });

    var reminder = binContent%6;

    var fixer = '';
    for(var k=0; k<6-reminder; k++){
        fixer+='0';
    }

    binContent = binContent+fixer;
    var bin2 =[];
    for(var i=0; i<binContent.length; i++){

        if((i+1)%6==0&&i!=0){
            bin2.push(parseInt(('00'+binContent[i-5]+
                binContent[i-4]+binContent[i-3]+
                binContent[i-2]+binContent[i-1]+
                binContent[i]), 2)) ;
        }
    }

    var base64Str = '';
    for(var j=0; j<bin2.length; j++){
        base64Str += lookUp.charAt(bin2[j]);
    }

    return base64Str;
};

console.log(base64('./1.txt'));

