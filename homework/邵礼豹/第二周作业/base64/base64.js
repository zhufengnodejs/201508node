var fs=require("fs");
var img=fs.readFileSync('./img.jpg');
var oString="";
var arr=[];
var base64="";
//转10
for(var j=0;j<img.length;j++){
    oString+=img[j].toString(2);
};
//转2并分成没6个一份并加“00”
for(var i=0;i<oString.length/6;i++){
    arr.push("00"+oString.slice(i*6,i*6+6))
};
//转10
for(var h=0;h<arr.length;h++){
    arr[h]=parseInt(arr[h],2)
}
//转base64；
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var g=0;g<arr.length;g++){
    base64+=str[arr[g]]
}
console.log(base64)
