var events=require("events");
var util=require("util");
function myWife(){}
var mywife=new myWife();

util.inherits(myWife,events);

function say(){
    console.log("嗯，麻溜的去洗碗吧！");
}
function say2(){
    console.log("别去洗完了！我来洗");
}
mywife.addListener("我去洗碗",say);//事件监听
mywife.addListener("我去洗碗",say2);//事件监听
mywife.removeListener("我去洗碗",say);//事件监听的移除
mywife.emit("我去洗碗");//事件的发射

