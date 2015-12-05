function file2base64(path){
    var fs = require('fs');
    var buf = fs.readFileSync(path);
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64 = '';
    var eightCode = '';
    var tenCode = [];
    for(var i=0;i<buf.length;i++){
        eightCode+= parseInt(buf[i]).toString(2);
    }
    for(var j=0;j<eightCode.length;j+=6){
        tenCode.push(parseInt(('00'+eightCode.substr(j,6)),2));
    }
    tenCode.forEach(function(item){
        base64+=str[item];
    });
    return base64;
}

var result = file2base64('./1.png');
console.log(result);