//通过数组创建Buffer

var buf2=new Buffer([15,16,17])
console.log(buf2);

//通过字符串创建

var buf3=new Buffer("中文输入");
console.log(buf3)

var buf4=new Buffer("中文输入");
console.log("buf4:"+buf4)


var buf =new Buffer(12);
buf.write("中文",0,6,"utf8");
console.log(buf.toString())


var http=require("http")