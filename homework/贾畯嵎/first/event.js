/**
 * Created by Administrator on 2015/11/25.
 */


const EventEmitter=require('events');
var util=require('util');
util.inherits(Girl,EventEmitter);


function Girl(){}


var girl=new Girl();


function Boy(name,response){
    this.name=name;
    this.response=response;
}
var b1=new Boy('服务员A',function(){
    console.log('an egg');
});
var b2=new Boy('服务员B',function(){
    console.log('two egg');
});
var b3=new Boy('服务员C',function(){
    console.log('3 egg');
});
girl.addListener('eleme',b1.response);
girl.on('eleme',b2.response);
girl.emit('eleme');
girl.once('die',function(){
    console.log('die')
});

girl.setMaxListeners(2);
console.log(girl.getMaxListeners());





