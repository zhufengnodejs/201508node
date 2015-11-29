/**
 * Created by Administrator on 2015/11/25.
 */
var buffer=new Buffer(12);
console.log(buffer);
buffer.length=23;
console.log(buffer);


var buffer2=new Buffer([11,12,23])
console.log(buffer2);

buffer2[1]=1111;
//buffer2.push('hehe')
console.log(buffer2)

// 长度
var str = "珠峰培训";
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);
