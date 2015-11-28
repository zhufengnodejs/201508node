/**
 * 事件
 * 观察者模式 也是订阅发布模式
 *
 */

var events = require('events');
var util = require('util');


function Girl(){};
var  girl = new Girl();
util.inherits(girl,events);

girl.addEventListener('eleme',b1.response);

Buffer.prototype.cp = function(targetBuffer){
    var buffer = new Buffer();
    buffer.concat([targetBuffer],this.sourceStart,this.buffer.length-this.sourceStart);
    return buffer;
};