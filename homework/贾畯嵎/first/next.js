/**
 * Created by Administrator on 2015/11/24.
 */
var fs=require('fs');


function say(){
    //setTimeout(function(){
        console.log(1)
    //},2000)

}
function say2(){
    console.log(2)
}
function say3(){
    console.log(3)
}
setImmediate(say3);

setTimeout(say2,0);
process.nextTick(say);
console.log(12)
fs.readFile('fish','utf-8',function(err,data){
    console.log(data)
})

// 同步大于 process.nextTick 大于 setTimeout 大于  setImmediate 大于 io

