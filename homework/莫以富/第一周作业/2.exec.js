/**
 *2. 实现一个简单的事件监听 包括添加监听 发射事件 移除监听
 */
var util = require('util');
var EventEmitter = require('events');
function myEmitter(){
    EventEmitter.call(this);
}
util.inherits(myEmitter, EventEmitter);


var myemitter = new myEmitter();
myemitter .addListener("event1", fn11);
myemitter .on("event1", fn12);


function fn11(){
    console.log("event1 fn1");
}

function fn12(){
    console.log("event1 fn2");
}

function fn21(){
    console.log("event2 fn21");
}

function fn22(){
    console.log("event2 fn22");
}

myemitter.on("event2", fn21);
myemitter.on("event2", fn22);
myemitter.emit("event1");
myemitter.emit("event2");
myemitter.removeListener("event1", fn11);
myemitter.removeListener("event1", fn12);
console.log("====================");
myemitter.emit("event1");
myemitter.emit("event2");