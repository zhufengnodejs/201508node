/**
 * Created by caomei on 2015/12/5.
 */
/**
 * base64编码是把3个8位字节(3*8=24) 转化为4个6位字节(4*6=24)
 * 1. 得到16进制的数字
 * 2. 把16进制转成10进制
 * 3. 把10进制转成二进制
 * 4. 把8位字节拆成6位字节，每字节前面加00
 * 5. 把6位字节转成10进制
 * 6. 用此10进制数字作为索引取得对应的字符拼成一个字符串就是最终的base64编码
 */


var base64=function(path){

    var fs=require('fs');
    var buf=fs.readFileSync(path);

    //转为十进制
    //var bufarr=buf.join().split(',');
    var bufarr=[];
    for(var i=0;i<buf.length;i++){
        bufarr[i]=buf[i];
    }
    //转为二进制
    var arr2=[];
    for(var i=0;i<bufarr.length;i++){
        arr2[i]=parseInt(bufarr[i].toString(2))
    }

    //转为二进制字符串
    var str=to2(bufarr).join().replace(/,/g,'');

    //把8位字节拆成6位字节，每字节前面加00
    var arr6=[];
    for(var i=0;i<str.length/6;i++){
        arr6[i]=parseInt('00'+str.substr(6*i ,6));
    }

    //分割后再转为十进制
    var aa=to10(arr6)
    //用此10进制数字作为索引取得对应的字符拼成一个字符串就是最终的base64编码
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str1='';
    for(var i=0;i<aa.length;i++){
        str1+=str[aa[i]]
    }
    return str1;

}

function to10(arr){
    var arr10=[];
    for(var i=0;i<arr.length;i++){
        arr10[i]=parseInt(arr[i],2)
    }
    return arr10;
}
function to2(arr){
    var arr2=[];
    for(var i=0;i<arr.length;i++){
        arr2[i]=arr[i].toString(2);

    }
    return arr2;
}

console.log(base64('a.txt'))
