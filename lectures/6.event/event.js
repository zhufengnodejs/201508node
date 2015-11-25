/**
 * 事件
 * 发布订阅模式
 * 观察者模式
 * 当主题对象在发生变化时，会通知所有的观察者对象，更新自己
 **/
//var EventEmitter = require('events').EventEmitter;
var EventEmitter = require('events');
var util = require('util');
util.inherits(Girl,EventEmitter);
/**
 *
 * @constructor
 */
function Girl(){

}
var girl = new Girl();
function Boy(name,response){
    this.name = name;
    this.response =response;
}
var b1 = new Boy('备胎1',function(){
    console.log('给你鸡腿');
});
var b2 = new Boy('备胎2',function(){
    console.log('给你东坡肘子');
});
var b3 = new Boy('备胎3',function(){
    console.log('给你鱼');
});
girl.addListener('eleme',b1.response);
girl.on('eleme',b2.response);
girl.emit('eleme');//发射事件
girl.emit('eleme');//发射事件
//只触发一次，触发一次之后再也不触发了
girl.once('die',function(){
    console.log('die');
});
girl.setMaxListeners(2); //设置最大的监听数量
//girl.addListener('eleme',b3.response);//增加监听
//girl.removeListener('eleme',b2.response);//去掉指定的监听



girl.removeAllListeners('eleme');
girl.emit('eleme');//发射事件