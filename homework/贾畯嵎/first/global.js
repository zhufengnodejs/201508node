/**
 * Created by Administrator on 2015/11/24.
 */



// global 全局变量的宿主
// global。name 全局对象属性
//未定义直接赋值的变量

name='zfpx';
global.age=6;
console.log(age);//6
console.log(name);//zfpx
console.log(global==global.global);//true

var obj={name:'objname',age:'objage'};
with(obj){
    console.log(age);
    console.log(name);
}

console.log(__filename); //当前模块的绝对路径
console.log(__dirname); // 当前文件的的目录

//console.log(global.process);

process.argv.forEach(function(arg,index){
    console.log(index+'   '+ arg)
})
//process.exit();//退出
var enva=process.env.enva;
console.log(enva);
console.log(process.pid);//进程id

process.stdin.on('data',function(data){//监听用户输入
    console.log('a'+data);//用户输入的东西
    process.stdout.write('read'+'   '+data)//输出 ‘read’
});


console.log(process.cwd());//当前文件所属的目录 f:\git\homework\贾畯嵎\first
process.chdir('../../'); //修改当前所属的目录
console.log(process.cwd());//f:\git\homework

console.log(process.memoryUsage());//使用内存情况 { rss: 17944576, heapTotal: 9275392, heapUsed: 4136920 }
process.kill(46567)//杀死进程为46567的程序
/**
 * bytes字节
 * rss: 17944576, 常驻内存
 * heapTotal: 9275392, 堆的问题
 * heapUsed: 4136920 堆的使用量
 */

