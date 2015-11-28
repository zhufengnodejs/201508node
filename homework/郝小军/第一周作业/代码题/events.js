var util=require("util"),EventEmitter=require("events"),foot=function (){};
util.inherits(foot,EventEmitter);
var Food=new foot(),people =function(response){
    this.response=response;
},people1= new people(function () {
    console.log("1号饿了！")
}),people2= new people(function () {
    console.log("2号饿了！")
});
Food.addListener("eat",people1.response);
Food.addListener("eat",people2.response);
Food.emit("eat");
Food.removeAllListeners('eat');//去掉all的监听
//Girl.removeListener('eat',people2.response);//去掉指定的监听
Food.emit("eat");