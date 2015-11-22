var home = require('./home.js');
//console.log(require.cache);// {标志标识:模块对象}
//delete require.cache['e:\\201508node\\lectures\\7.module\\home.js'];

var home = require('./home.js');
/*
console.log(home.x);
home.addX(6);
home.say('angular');
home.say('baby');
*/

//home('baby');
console.log(global.process.modelLoadList);
/*
function say(){
    console.log('hello');
    return 'say';
}
var say = say();
console.log(say);*/
