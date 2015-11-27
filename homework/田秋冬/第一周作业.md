#问答题
##1. 200HTTP响应是什么意思
     请求成功
##2. Connection:Keep-Alive头为什么很重要
     连接状态：保持链接
     避免多次打开同一个链接
##3. 如何导入一个模块
     require("模块名称")
##4. 如何安装一个模块
     npm install -g 模块  （-g 全局安装）
##5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用
      http:
           http.createServer([requestListener])：创建一个服务器
           http.createClient([port][, host]):创建一个客户端
           http.get(options[, callback])：发起get请求
           http.request(options[, callback]):发起请求
      url:
           url.format(urlObj):返回请求的路径
           url.parse(urlStr):返回格式化的url对象，包括search，query，pathname，path,href等属性。
           url.resolve(from,to):为URL或 href 插入 或 替换原有的标签
      fs  ：
            // 打开、读取文件
            fs.open(path, flags[, mode], callback)：
            fs.openSync(path, flags[, mode])     
            fs.readFile(file[, options], callback) 
            fs.read(fd, buffer, offset, length, position, callback) 
            
            // 写入文件
            fs.writeFile(file, data[, options], callback)
            fs.writeFileSync(file, data[, options])
            fs.writeSync(fd, buffer, offset, length[, position])
            fs.writeSync(fd, data[, position[, encoding]])
       mime：    
            mime.lookup(path)       // 获取文件mime type
            mime.extension(type)    // 获取类型的扩展名
            mime.charsets.lookup()  // 返回编码类型
            mime.define()           // 添加默认编码类型对应关系
##6. 写出几个global下的全局变量并注明其作用
       process ：进程对象，
       buffer               // 缓冲区，主要用于对数据的操作
       // 清除操作
       clearImmediate:      
       clearInterval:
       clearTimeout
       setImmediate:        // 当同步代码和nexttick代码执行完成之后执行的代码块
       setInterval:         // 重复定时器
       setTimeout:          // 单次定时器
       console:             // 输出到控制台
##7. 写出几个process 下的几个属性或方法并注明其作用
       process.stdout         // 标准输出流
       process.argv           // 命令行各参数的数组
       process.env            // 环境变量
       process.versions       // node版本和依赖
       process.id             // 进程的编号
       process.platform       // 运行平台
       
       process.chdir()        // 改编当前工作进程目录
       process.memoryUsage()  // 返回内存对象
       process.cwd()          // 当前进程的工作目录
       process.kill(pid)      // 终止进程
       process.nextTick（cb）   // 事件循环结束时调用函数
       
       
       
 
 
#代码题
##1. 如何在node中启用一个服务并监听8080端口
      var http=require("http");
      http.createServer(function(req,res){}).listen(8080,localhost);
##2. 实现一个简单的事件监听 包括添加监听  发射事件 移除监听
     var event=require("events");
     var util=require("util");
     
     var myEvent=function(){};
         util.inherits(myEvent,event);
     var nMyEvent=new myEvent();
     
     var f1=function(){};
         nMyEvent.on("connection",f1);
         nMyEvent.emit("connection");
         nMyEvent.removeListener("connection",f1);
         nMyEvent.setMaxListeners(3);

     
##3. 如何读取一个txt文本，并且解决乱码问题
      var fs=require("fs");
      
      fs.readFile("./global/1.txt","utf8",function(err,data){
          console.log(data.toString("utf8"));
      });
##4. 自己实现一遍buffer的拷贝方法
      Buffer.prototype.cp=function(targetBuffer,targetStart,sourceStart,sourceEnd){
          if(!sourceEnd)
              sourceEnd=this.length;
          for(var i=sourceStart;i<sourceEnd;i++){
              targetBuffer[targetStart]=this[i];
              targetStart++;
          }
          return targetBuffer;
      };