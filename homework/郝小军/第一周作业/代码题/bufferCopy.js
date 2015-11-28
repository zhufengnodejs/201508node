Buffer.prototype.copy=function(targetBuffer,targetStart,sourceStart,sourceEnd){
    for(var i=sourceStart;i<sourceEnd;i++){
        targetBuffer[targetStart++]=this[i];
    }
    return targetBuffer
};
var buf1 =new Buffer([9,9,9,9]);
var buf2 =new Buffer([1,2,3,4,5,6,0,0,0,0]);
var test=buf1.copy(buf2,6,0,4);
console.log(test);