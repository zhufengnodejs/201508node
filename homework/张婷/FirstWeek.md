#问答题
##1. 200HTTP响应是什么意思
        "200":响应成功
##2. Connection:Keep-Alive头为什么很重要
        Keep-Alive表示客户端到服务端的连接是持续有效的，可以在一定程度上提高性能
##3. 如何导入一个模块
        require("模块名称")方法，如 :
        var modules=require('./modules'); ./表示当前文件所在的目录
        var util = require("util");
##4. 如何安装一个模块
        npm install "模块名"
        npm install -g 模块  （全局安装）
##5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用
        1、url模块：
            -url.parse(request.url,true); //将一个URL字符串转换成对象并返回,true表示把其中的查询字符串转成对象
        2、http模块：
            -http.createServer(function(request,response){}); //创建一个HTTP服务器
        3、fs模块：
            -fs.readFile(filename, [options], callback); //异步读取文件内容,采用回调的方式，无返回值。如果不指定编码，默认读出来的是二进制格式
            -fs.readFileSync(filename, [options]); //同步读取文件内容，有返回值。如果不指定编码，默认读出来的是二进制格式
        4、mime模块：
            - mime.lookup(filePath) ; //实现文件类型和内容类型的转换

##6. 写出几个global下的全局变量并注明其作用
        -buffer // 缓冲区，主要用于对数据的操作
        -setImmediate // 当同步代码和nexttick代码执行完成之后执行的代码块
        -process // 描述当前Node.js进程状态
        //设置及清除定时器
        -setTimeout();
        -clearTimeout();
        -setInterval();
        -伪全局变量:
        -__filename // 当前正在执行的脚本的文件名
        -__dirname // 当前正在执行的脚本所在的目录

##7. 写出几个process 下的几个属性或方法并注明其作用
        -argv //返回命令行脚本的各个参数组成的数组
        -env //指向当前shell的环境变量
        -pid //获取进程的id
        -chdir //改变当前工作的目录，'..'是回到上一级
        -cwd //返回当前(进程)的工作目录
        -memoryUsage //返回一个对象，描述了 Node 进程的内存占用量
        -stdout //标准输出
        -stderr //标准错误
        -stdin //标准输入
        -exit //退出进程
        -kill //杀死一个进程
        -nextTick //在事件循环的下一个循环中调用callback，在所有同步方法执行完成后才执行此回调


#代码题
##1. 如何在node中启用一个服务并监听8080端口
        var http=require('http');
        var server=http.createServer(function(request,response){
            response.end('hello world');
        });
        server.listen(8080,'localhost',function(){
            console.log('服务已启动');
        });

##2. 实现一个简单的事件监听 包括添加监听  发射事件 移除监听
       //引入模块
       var EventEmitter=require('events');
       var util=require('util');
       //进行继承
       util.inherits(Water,EventEmitter);
       
       function Water(){};
       var water=new Water();
       //绑定事件
       water.on("boiling",drink);
       water.on("boiling",noodles);
       function drink(){
           console.log("水开了，可以喝了");
       }
       function noodles(){
           console.log("水开了，可以泡面了");
       }
       //发射事件
       water.emit("boiling");
       //移除事件
       water.removeListener("boiling",drink);
       water.emit("boiling");

##3. 如何读取一个txt文本，并且解决乱码问题
        var fs=require("fs");
        fs.readFile("1.txt","utf8",function(err,data){
            console.log(data);
        });
        
##4. 自己实现一遍buffer的拷贝方法
        Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
            if(!sourceEnd){
                      sourceEnd=this.length;
            }
            for(var i=sourceStart;i<sourceEnd;i++){
                targetBuffer[targetStart] = this[i];
                targetStart++;
            }
            return targetBuffer;
        }
        var buf1=new Buffer('珠峰培训','utf8');
        var buf2=new Buffer('欢迎','utf8');
        buf1.cp(buf2,6,0,6);
        console.log(buf2.toString()); //欢迎珠峰
