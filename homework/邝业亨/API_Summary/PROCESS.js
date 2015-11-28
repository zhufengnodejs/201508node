var process = require('process');

//console.log(process);
console.log(process.argv);      //进程参数，默认有两个参数
console.log(process.pid);       //进程标示符
console.log(process.version);   //进程版本
console.log(process.exit);      //结束进程
console.log(process.kill);      //杀死进程
console.log(process.arch);      //进程运行的系统架构
console.log(process.nextTick);  //进程完成后回调函数
console.log(process.mainModule);//主模块信息

