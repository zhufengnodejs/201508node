/**
 * Created by 吴世界 on 2015/11/27.
 */
//function copy(src,target,offset,length,start){
//    buf6.copy(buf7,6,0,24);
//    console.log(buf7.toString());
//    console.log(buf6.toString());
//}
var buf6=new Buffer("珠峰",'utf8');
var buf7=new Buffer("培训",'utf8');
copy(buf6,buf7,6,6,0);