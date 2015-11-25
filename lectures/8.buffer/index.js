/**
 * Buffer 缓存区 暂时存放在内存里的一段数据
 * JS语言只支持字符串类型，没有二进制。
 * 在处理tcp和文件流的时候，必须 使用二进制
 * 数组非常像
 * 由一个[八位=1个字节]元素组成的数组
 *
 */
//创建Buffer对象三种方法
//指定buffer长数
var buf1 = new Buffer(12);
console.log(buf1);
buf1.fill(0,0);//从哪个索引开始，到哪个索引结束，赋指定的值
console.log(buf1);

//2.通过数组创建
//var buf2 = new Buffer([15,16,17]);
var buf2 = new Buffer([15,16,17]);
// f 10 11
console.log(buf2);
//3. 通过字符串来创建
var buf3 = new Buffer('珠峰培训');
console.log(buf3);

buf3[0] = 122;

// 长度
var str = "珠峰培训";
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);

str[0] = '我';
buf[0] = 1;
console.log(str);
console.log(buf);

//slice
var substr = str.slice(1,2);
console.log(substr);
var subbuf = buf.slice(1,2);
subbuf[0] = 100;
console.log(subbuf);
console.log(buf);

// buffer字符串如何转化
var buf = new Buffer('珠峰培训');
console.log(buf.toString()+'====================================');//转成字符串

var buf = new Buffer(12);
buf.write("珠峰",0,6,'utf8');
buf.write("培训",6,3);

console.log(buf.toString());

var buf = new Buffer('珠峰培训');
console.log(buf);
//<Buffer e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad>
var buf1 = new Buffer([0xe7 ,0x8f ,0xa0 ,0xe5, 0xb3 ,0xb0,0xe5]);
var buf2 = new Buffer([0x9f ,0xb9, 0xe8, 0xae, 0xad]);
console.log(buf1.toString());
console.log(buf2.toString());
Buffer.concat([buf1,buf2],12);
console.log(Buffer.concat([buf1,buf2],12).toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
var decoder2 = new StringDecoder();
console.log(decoder.write(buf1));
console.log(decoder2.write(buf1));
console.log(decoder.write(buf2));
console.log(decoder2.write(buf2));
//判断一个对象是否是buffer
console.log(Buffer.isBuffer({}));//false
console.log(Buffer.byteLength("珠峰"));
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('gbk'));

/**
 buf.cp(targetBuffer, [targetStart], [sourceStart], [sourceEnd])#
 显示原文其他翻译纠错
 targetBuffer Buffer 类型对象 - 将要进行拷贝的Buffer
 targetStart Number类型, 可选参数, 默认: 0
 sourceStart Number类型, 可选参数, 默认: 0
 sourceEnd Number类型, 可选参数, 默认: buffer.length
 */

Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd){
    var length = sourceEnd-sourceStart>targetBuffer.length-targetStart?targetBuffer.length-targetStart:sourceEnd-sourceStart
    //console.log(length);
    for(var i=sourceStart;i<sourceStart+length;i++)
            targetBuffer[targetStart++] = this[i];
}
var src = new Buffer([6,7,8,9,10,11,12]);
var target = new Buffer([1,2,3,4,5,6,0,0,0,0,0,0]);
src.cp(target,6,0,6)
console.log(target);

/*

function Person(){
  this.name ='';
    this.friend = '';
}
Person.prototype.earth = 'earth';
Person.prototype.eat= function(food){

}
Person.prototype.walk= function(){

}
*/
