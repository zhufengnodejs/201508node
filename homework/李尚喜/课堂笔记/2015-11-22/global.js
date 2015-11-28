/**
 * Created by Administrator on 15-11-22.
 */

name = 'lishangxi';//这样写，是声明全局global的属性
console.log(name);
console.log(global.name);
//console.log(global);
console.log(global === global.global);// true
console.log(global === global.global.global); // true

/*
* 都是模块的参数
* __fliename  当前模块的绝对路径
* __dirname   当前模块的所在的文件夹
* */
function ModuleJs(__filename,__dirname){

    console.log(__filename);//都是模块的参数
    console.log(__dirname);
}
console.log(__filename);//都是模块的参数
console.log(__dirname);

/*
* process 进程对象
*
*
* */

//process.argv  命令行参数
process.argv.forEach(function(arg,index){
    console.log(index +'-'+ arg);
});

// 获取环境变量的值
console.log(process.env.Path);

//进程pid
console.log(process.pid);
// process.stdin()
// process.stdout() 控制台输出的为黑色
// process.stderr 控制台输出为红色
// process.exit()
// 杀死一个进程 process.kill(pid);