Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd){
    var length = sourceEnd-sourceStart>targetBuffer.length-targetStart?targetBuffer.length-targetStart:sourceEnd-sourceStart

    for(var i=sourceStart;i<sourceStart+length;i++)
        targetBuffer[targetStart++] = this[i];

}

var src = new Buffer([6,7,8,9,10,11,12]);
var target = new Buffer([1,2,3,4,5,6,0,0,0,0,0,0]);
src.cp(target,6,0,6);
console.log(target);