var util = require('util');
function Parent(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log('hello',this.name);
    }
}

function Child(name,age){
    Parent.apply(this,[name,age]);
    this.name = name;
}
util.inherits(Child,Parent);
//Child.prototype = new Parent();
var child = new Child('child',6);
console.log(child.name);//child
console.log(child.age);//6
child.say();//hello child

function Person(){
    this.name = 'person';
    this.child={
        name:'child',
        grandson:{
            name:'grandson'
        }
    }
    /*this.toString = function(){
        return this.name;
    }*/
}
var p = new Person();
console.log(util.inspect(p,{showHidden:true,depth:2}));

console.log(util.isArray([]));//是否是一个数组
console.log(util.isRegExp(/\d/));//正则
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));


