/**
 * 事件
 * 发布订阅模式
 * 观察者模式
 * 当主题对象在发生变化时，会通知所有的观察者对象，更新自己
 **/
<<<<<<< HEAD
var EventEmitter = require('events').EventEmitter;
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
=======
//var EventEmitter = require('events').EventEmitter;
//var EventEmitter = require('events');
//var util = require('util');
//util.inherits(Girl,EventEmitter);
///**
// *
// * @constructor
// */
//function Girl(){
//
//}
//var girl = new Girl();
//function Boy(name,response){
//    this.name = name;
//    this.response =response;
//}
//var b1 = new Boy('备胎1',function(){
//    console.log('给你鸡腿');
//});
//var b2 = new Boy('备胎2',function(){
//    console.log('给你东坡肘子');
//});
//var b3 = new Boy('备胎3',function(){
//    console.log('给你鱼');
//});
//girl.addListener('eleme',b1.response);
//girl.on('eleme',b2.response);
//girl.emit('eleme');//发射事件
//girl.emit('eleme');//发射事件
////只触发一次，触发一次之后再也不触发了
//girl.once('die',function(){
//    console.log('die');
//});
//girl.setMaxListeners(2); //设置最大的监听数量
////girl.addListener('eleme',b3.response);//增加监听
////girl.removeListener('eleme',b2.response);//去掉指定的监听
//
//
//
//girl.removeAllListeners('eleme');
//girl.emit('eleme');//发射事件

//var EventEmitter=require("events");
//var util=require("util");
//util.inherits(Gril,EventEmitter);
//function Gril(){
//
//}
//var gril =new Gril();
//function Boy(name,response){
//    this.name=name;
//    this.response=response;
//}
//var boy1=new Boy("kk",function(){
//    console.log("boy1");
//});
//var boy2=new Boy("oo",function(){
//    console.log("boy2");
//});
//var boy3=new Boy("oo",function(){
//    console.log("boy3");
//});
//var boy4=new Boy("oo",function(){
//    console.log("boy4");
//});
//gril.addListener('eleme',boy1.response);
//gril.addListener('eleme',boy2.response);
//gril.on("mamalai",boy3.response);
//gril.once("mamalai",boy4.response);
//gril.once("mamalai",boy4.response);
//gril.emit("eleme");
//gril.emit("mamalai");


//var EventEmitter = require('events');
//var util = require('util');
//util.inherits(Gril,EventEmitter);
//function Gril(){
//
//};
//var gril=new Gril();
//function Boy(name,response){
//     this.name=name;
//     this.response=response;
//}
//var boy1=new Boy("kk",function(){
//    console.log("boy1,kk");
//});
//var boy2=new Boy("oo",function(){
//    console.log("boy2,oo");
//});
//var boy3=new Boy("aa",function(){
//    console.log("boy3,aa");
//});
//var boy4=new Boy("bb",function(){
//    console.log("boy4,bb");
//});
//gril.addListener("ele",boy1.response);
//gril.addListener("ele",boy2.response);
//gril.on("ele",boy3.response);
//gril.once("ele",boy4.response);
//gril.once("ele",boy4.response);
//gril.emit("ele");





>>>>>>> c5b0174a28d5835bdea3488bb677c4fb94e8cdda
