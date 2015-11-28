
var EventEmitter = require('events');
var util = require('util');

function Girl(request){
    this.request = request;
}
function Boy(response){
    this.response = response;
}

util.inherits(Girl,EventEmitter);
util.inherits(Boy,EventEmitter);

var girl = new Girl(function(){
    console.log('我饿了！');
    girl.emit('eleme');
});
var boy = new Boy(function(){
    console.log('就不给！');
    boy.emit('qiuqiuwo');
});

girl.on('eleme', boy.response);
boy.on('qiuqiuwo', girl.request);

girl.emit('eleme');//成功的玩坏了emitter。。。
