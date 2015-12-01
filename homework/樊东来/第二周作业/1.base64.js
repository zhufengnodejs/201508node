var fs = require('fs');
function base64(path){
    var arr = [];
    var buf = fs.readFileSync(path);
    for(var i =0; i<buf.length;i++){
        var temp = parseInt(buf[i]).toString(2);
        if(temp.length<8){
            var j = (8-temp.length);
            var str = '';
            for(var n = 0; n<j;n++){
                str+='0';
            }
            temp+=str;
        }
        arr.push(temp);
    }
    var str = arr.join('');
    var pattern = new RegExp('(\\d{6})','g');
    var temp2 = [];
    str.replace(pattern, function ($1) {
        temp2.push('00'+$1);
    });
    var base64Str = '';
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(var i = 0; i<temp2.length;i++){
        base64Str+=str[parseInt(temp2[i],2)];
    }
    console.log(base64Str);
}
base64('b.txt');