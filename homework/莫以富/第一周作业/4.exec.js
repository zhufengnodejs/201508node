/**
 *4. 自己实现一遍buffer的拷贝方法
 */

var util = require('util');
/**
 * 检查参数类型，如果传递的参数不是指定的类型会报错！
 * @param name  string 参数的名字
 * @param type  string 期望的类型，标识类型的字符串 number object string boolean 等字符串
 * @param value 参数的值
 */
function checkParamType(name,type, value) {
    if (arguments.length < 3) {
        throw RangeError('expected 3 parameters but only gived :' + arguments.length + "");
        return;
    }
    var checkType = "is" + type[i].toUpperCase() + type.substr(1, type.length);
    if (!util[checkType](value)) {
        throw TypeError('parameter '+ name + ' : ' + value +' was wrong, since it expected a ' +  type);
    }
}

/**
 * 自己写的copy 方法
 * @param target 目标buffer
 * @param targetStart 从target的targetstart位置开始 copy，默认值 0
 * @param sourceStart 从数据源的sourceStart位置 开始copy 到 target中
 * @param sourceEnd 复制的结束位置
 */
function cp(target, targetStart, sourceStart, sourceEnd){
    if(!Buffer.isBuffer(target)){return;}

    targetStart =  targetStart||0;
    sourceStart =  sourceStart || 0 ;
    sourceEnd = sourceEnd || this.length - 1;

    checkParamType('targetStart', 'Number', targetStart);
    checkParamType('sourceStart', 'Number', targetStart);
    checkParamType('sourceEnd', 'Number', targetStart);

    if(sourceEnd > this.length-1){//如果sourceEnd的值超过了源
        sourceEnd = this.length - 1;
    }

    if(sourceStart > sourceEnd){
        throw RangeError('sourceStart : ' + sourceStart + " is invalid, since it should little than sourceEnd： "+ sourceEnd);
        return;
    }

    for(var i = sourceStart, pos=0; i<=sourceEnd; i++){
        target[targetStart + i - sourceStart] = this[i];
    }
}

Buffer.prototype.cp = cp;

var buf1 = new Buffer([1, 2,3,4,5,6,7,8,9,10]);
var buf2 = new Buffer([3,4,5,6,7,8,9,10,11,12,13,14,15]);
buf1.cp(buf2);
console.log(buf2);
buf1.cp(buf2, 'a', 'b');
console.log(buf2);
buf1.cp(buf2, 10, 3, 10);
console.log(buf2);