var fs = require('fs');
/**
 * nexttick
 * 在事件循环的下一个循环中调用callback函数
 * 在所有的同步方法执行完成之后执行此回调
 * nexttick队列会在完全执行完才调用IO操作
 * 因此递归的nexttick就像一个while(true)的死循环，阻止任何的IO操作
 *
 **/
function say(name){
    console.log(name,'hello');
    process.nextTick(function(){
        console.log(name,'next hello');
    });
}
setTimeout(say.bind(this,'setTimeout'),0);
process.nextTick(say.bind(this,'nextTick'));
fs.readFile('1.txt','utf8',function(err,data){
    console.log(data);
})

/**

 setImmediate(function(){
 );