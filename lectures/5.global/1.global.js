/**
 * 全局对象
 * global 全局变量的宿主
 *   1. global.name 全局对象属性
 *   2. 未定义直接赋值的变量也会变成global的属性
 *
 * 全局对象和全局变量的关系
 *
 * 永远 要使用var来定义变量，不然会污染全局命名空间
 * 在模块内部声明的变量属性模块本身，不属于全局变量
 *
 **/

name = 'zfpx';
global.age = 6;
console.log(name);
console.log(age);
console.log(global === global.global);

//console.log(global);

var obj = {name:'objname',age:8};
with(obj){
    console.log(name);
    console.log(age);
}

/*
  __filename 当前模块的绝对路径
* */

/**
 * 1.进入全局
 *  声明的变量 var
 *  function hello()
 *  this
 * 2. 进入一个函数内部的时候
 *   arguments
 *   this
 *   参数列表
 */
console.log(__filename);//都是方法的参数
console.log(__dirname);//都是方法的参数

/*function(__filename,__dirname){
    console.log(__filename);//都是方法的参数
    console.log(__dirname);//都是方法的参数
}*/
//进程对象
//argv
//env.Path
//pid: 2280,
//chdir: [Function: chdir],
//cwd: [Function: cwd],
//memoryUsage: [Function: memoryUsage],
//stdout: [Getter],
//stderr: [Getter],
//stdin: [Getter],
//exit: [Function],
//kill: [Function],
//console.log(process);
//命令行参数
process.argv.forEach(function(arg,index){
    console.log(index,arg);
});
setTimeout(function(){
    process.exit();
},5000);
//获取环境变量的值

console.log(process.env.Path);
var enva = process.env.enva;
var devurl ='189';
var onlineurl = '120';
if(enva == 'dev'){
    var dburl = devurl;
}else if(enva == 'oneline'){
    var dburl = onlineurl;
}
console.log(dburl);

console.log(process.pid);

process.stdin.on('data',function(data){
    process.stdout.write("read",data);
});

console.log(__dirname);//当前文件所属的目录
console.log(process.cwd());//当前文件所属的目录
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);
/**
 * bytes字节
 * rss: 17,297,408, 常驻内存
 * heapTotal: 9,275,392, 堆的问题
 * heapUsed: 4,140,872 堆的使用量
 */

/*
var arr = [];
while(true){
    arr.push(new Buffer(1024*1024));
    console.log(process.memoryUsage());
}*/
