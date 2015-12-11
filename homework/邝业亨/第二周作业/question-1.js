var fs = require('fs');

function fileToBase64 (src) {
    try {
        var fileData = fs.readFileSync(src);
    } catch (e) {
        if(e.code == 'ENOENT'){
            console.log('文件不存在');
            return;
        }
    }
    var buf;
    buf = new Buffer(fileData);
    //console.log(buf.toString('base64'));
    var str = '';
    var arr = [];
    var patchArr = ['0','00','000','0000','00000','000000','0000000'];
    buf.forEach(function (value,i) {
        var binary = value.toString(2);
        if(binary.length < 8 ){
            binary = patchArr[7-binary.length] + binary;
        }
        str += binary;
    });
    str.replace(/\d{6}/g, function (item) {
        arr.push('00'+item);
    });

    var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64 = '';
    arr.forEach(function (value, i) {
        arr[i] = parseInt(value,2);
        base64 += baseStr[arr[i]];
    });
    return base64;
}


var fileBase64 = fileToBase64('../API_Summary/HTTP.js');
console.log(fileBase64);
