var fs = require('fs');
makeBase64('./qq.jpg', 'base64.txt');
function makeBase64(srcFile, destFile){
    var STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    fs.readFile(srcFile, {flag:'r'}, function(err, data){
        if(err){
            console.log(err);
        }else{
            fs.createWriteStream(destFile).write(_convert(data).join(''));
        }
    });

    function _convert(buf){
        var i= 0, bufLen, mod,prev, cur,cur2, ascii, arr = new Array();
        for(bufLen = buf.length; i<bufLen; i++){
            ascii = buf[i];
            mod = i % 3;//三个字节为一段
            if(mod == 0){//第一个6位 >>右移 值变小
                cur = ascii >> 2;
                arr.push(STR[cur]);
            }else if(mod == 1){//第二个6位, 取前一个字母的后2位 + 当前字母的前四位
                cur = (prev & 3)<<4 | (ascii >> 4);
                arr.push(STR[cur]);
            }else{//第三个6位 取前一个字母的后四位 + 当前字母的前2位
                cur = ((prev & 15) << 2) | (ascii >> 6);
                arr.push(STR[cur]);
                cur2 = ascii & 0x3f;
                arr.push(STR[cur2]);
            }
            prev = ascii;
        }
        var left = bufLen%3;//剩余几个了
        if(left != 0){
            switch (left){
                case  1://剩余一个字符的情况
                    arr.push(STR[prev & 3]);//取上一个的最后两位
                    arr.push('=');//补=
                    arr.push('=');//补=
                    break;
                case  2://剩余2个字符的情况
                    arr.push(STR[prev & 15 << 2]);//取上一个的最后4位
                    arr.push('=');//补=
                    break;
            }
        }
        return arr;
    }
}
