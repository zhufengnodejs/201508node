/**
 * Created by 吴世界 on 2015/11/27.
 */
//function copy(src,target,offset,length,start){
//    buf6.copy(buf7,6,0,24);
//    console.log(buf7.toString());
//    console.log(buf6.toString());
//}
//var buf6=new Buffer("珠峰",'utf8');
//var buf7=new Buffer("培训",'utf8');
//copy(buf6,buf7,6,6,0);

var buf1=new Buffer([1,2,3,4,5,6]);
var buf2=new Buffer([11,12,13,14,15,16]);
Buffer.prototype.copy=function(targetButter,targetStart,sourceStart,sourceEnd){
    var length=sourceEnd-sourceStart>targetButter.length-targetStart?targetButter.length-targetStart:sourceEnd-sourceStart;
    console.log(length);
    for(var i=0;i<length;i++){
        targetButter[targetStart++]=this[i];
    }
};
buf1.copy(buf2,0,1,3);
console.log(buf2);