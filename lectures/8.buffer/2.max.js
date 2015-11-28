//var sum =0;
//for(var i=0;i<8;i++){
//    sum += Math.pow(2,i);
//}
//console.log(sum);// 255 ==
//console.log(255..toString(16));//ff
//console.log(15+15*16);

//var sum=0;
//for(var i=0;i<8;i++){
//    sum+=Math.pow(2,i);
//}
//console.log(sum);
//var buf1=new Buffer(12);
//console.log(buf1);
//buf1.fill(0,0);
//console.log(buf1);
//var buf1=new Buffer("12");
//console.log(buf1);
//var buf1=new Buffer([15,16,17]);
//console.log(buf1);
//var str="珠峰培训";
//var buf2=new Buffer(str);
//console.log(str.length);
//console.log(buf2);
//str[0]=2;
//buf2[0]=2;
//console.log(str);
//console.log(buf2);
//str=str.slice(1,2);
//buf2=buf2.slice(1,2);
//console.log(str);
//console.log(buf2);
//
//var buf3=new Buffer(12);
//buf3.write("珠峰",0,6,"utf8");
//buf3.write("培训",6,6,"utf8");
//console.log(buf3.toString());
//var buf4=new Buffer([0xe7, 0x8f, 0xa0, 0xe5, 0xb3, 0xb0]);
//var buf5=new Buffer([0xe5, 0x9f, 0xb9, 0xe8 ,0xae ,0xad]);
//console.log(Buffer.concat([buf4,buf5],12).toString());

//function copy(src,target,offset,length,start){
//    buf6.copy(buf7,0,0,12);
//    console.log(buf7.toString());
//}
//var buf6=new Buffer("珠峰",'utf8');
//var buf7=new Buffer("培训",'utf8');
//copy(buf6,buf7,6,6,0);




//var buf1 = new Buffer("珠峰");
//var buf2 = new Buffer("培训");
//Buffer.prototype.copy=function(targetBuffer,sourceBuffer,targetStart, sourceStart, sourceEnd){
//    console.log(targetBuffer);
//
//    for (var i = sourceStart ; i < sourceEnd ; i++) {
//        console.log(targetBuffer.length);
//        targetBuffer[targetBuffer.length++]=sourceBuffer[i].toString(16);
//        console.log(targetBuffer[targetBuffer.length++]);
//    }
//}
//buf1.copy(buf2,buf1,6,0,6);
//console.log(buf2.toString());


var buf1 = new Buffer(26);
var buf2 = new Buffer(26);
console.log(buf1);
console.log(buf2);
Buffer.prototype.copy=function(targetBuffer,targetStart, sourceStart, sourceEnd){
    for (var i = 0 ; i < 26 ; i++) {
        this[i] = i + 97; // 97 is ASCII a
    }
    for(var n=sourceStart;n<sourceEnd;n++){
        targetBuffer[n]=this[n];
    }
};
buf1.copy(buf2, 8, 16, 20);
console.log(buf1.toString());
console.log(buf2.toString('ascii', 0, 25));


