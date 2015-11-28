/**
 * Created by 吴世界 on 2015/11/27.
 */
var EventEmitter=require("events");
var util=require("util");
function Men(){

}
util.inherits(Men,EventEmitter);
var person=new Men();
function Life(name,response){
    this.name=name;
    this.response=response;
}
var eat=new Life("eat",function(){
    console.log("aa");
});

var drink=new Life("drink",function(){
    console.log("bb");
});

var sleep=new Life("sleep",function(){
    console.log("cc");
});
//person.setMaxListeners(1);
person.addListener("生活",eat.response);
person.addListener("生活",drink.response);
person.on("生活",sleep.response);
person.once("die",function(){
    console.log("die");
});
person.removeListener("生活",eat.response);
person.removeAllListeners("生活");
person.emit("生活");
person.emit("die");
person.emit("die");