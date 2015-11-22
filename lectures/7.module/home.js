/*
module.exports = {};
function home(require,__dirname,__filename,module){
    var exports = module.exports;
*/
    var x =5;
    var addX = function(num){
        console.log(x+num);
    }
    exports.addX = addX;
    exports.x = x;
    exports.say = function(name){
        console.log('hello '+name);
    }
    module.exports = function(name){
        console.log('hello '+name);
    }
    module.exports = [];
    module.exports = 'hello';
/*
    return module.exports;
}

var home = home();
console.log(home.x);
console.log(home.addX(6));*/
