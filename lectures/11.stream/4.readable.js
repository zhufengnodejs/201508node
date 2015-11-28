var Readable = require('stream').Readable;
var util = require('util');

util.inherits(Counter,Readable);
/**
 * 无论实现何种流，模式一样
 * 从1递增到10发射数字，直到结束
 * @constructor
 */
function Counter(){
    Readable.call(this);
    this._max = 10;
    this._pos = 1;
}
Counter.prototype._read = function(){
    var i = this._pos++;
    if(i>this._max)
        this.push(null);//push null的时候表示结束，会触发end事件
    else{
        this.push(new Buffer(i+""));// 会触发data事件
    }
}

var counter = new Counter();
//数据从哪来
counter.on('data',function(data){
    console.log(data.toString());
});
//何时结束
counter.on('end',function(){
    console.log('end');
});