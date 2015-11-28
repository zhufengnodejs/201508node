/**
 * Created by Administrator on 2015/11/24.
 */

var util=require('util');

function Parent(name,age){
    this,name=name;
    this.age=age;
    this.say=function(){
        console.log(this.name);
    }
    this.abble={
        chlld:{
            boy:[{a:{b:[1,2,3,4,6,6,6]}}]
        }
    }
}
function Child(name,age){
    Parent.apply(this,[name,age]);
    this,name=name;
}
//console.log(util.inspect)
util.inherits(Child,Parent);

var p=new Parent();

console.log(util.inspect(p,{showHidden:true,depth:Infinity }));

