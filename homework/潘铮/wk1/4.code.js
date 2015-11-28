
Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd){
    if(targetStart>targetBuffer.length || targetStart<0||targetStart==null){
        targetStart = 0;
    }

    if(sourceStart>this.length||sourceStart<0||sourceStart==null){
        sourceStart = 0;
    }

    if(sourceEnd>this.length||sourceEnd<0||sourceEnd==null){
        sourceEnd = this.length;
    }
    var sourceSliced = this.slice(sourceStart, sourceEnd);

    for(var i=0; i<sourceSliced.length; i++){
        targetBuffer[targetStart+i]=sourceSliced[i];
    }

};

var src = new Buffer([6,7,8,9]);
var target = new Buffer([1,2,3,4,5,0,0,0,0,0,0,0]);

src.cp(target,6,0);
console.log(target);