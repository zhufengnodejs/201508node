Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
    if(!sourceEnd){
        sourceEnd=this.length;
    }
    for(var i=sourceStart;i<sourceEnd;i++){
        targetBuffer[targetStart] = this[i];
        targetStart++;
    }
    return targetBuffer;
}
var buf1=new Buffer('安邦','utf8');
var buf2=new Buffer('我是名字，你好','utf8');
buf1.cp(buf2,6,0,6);
console.log(buf2.toString());//我是安邦，你好