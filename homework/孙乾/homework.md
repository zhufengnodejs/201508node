#问答题
##1. 200HTTP响应是什么意思

    当前端发起请求后，服务端开始解析路径和查询字符串，然后开始处理生成响应页面
    如果解析成功则会返回一个以200的状态码和处理完成的页面一并返回给客户端

##2. Connection:Keep-Alive头为什么很重要
        
        它可以一直保持服务连接，不用每次都去进行TCP三次握手
    
##3. 如何导入一个模块

    var http = require('http');  通过global的require属性导入

##4. 如何安装一个模块

    npm install mime; 使用npm

##5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用

    var http = require('http');
    var server = http.createServer(function (req,res){console.log('服务已启动')}); 创建一个http服务，返回一个新的web服务器对象
    server.listen(8080); 监听一个8080的端口
    
    var url = require('url');
    url.parse(url,true,); 输入一个url字符串，可转成一个对象
    url.formate(urlobj); 输入一个url对象，可转成一个字符串
    url.resolve(from,to); 输入一个原始的路径，可改变到目标路径
    
    var fs = require('fs');
    fs.readFile('index.html',function (err,data){});  异步读取文件
    fs.readFileSync(); 同步读取文件，返回一个字符串或buffer
    fs.writeFile(); 异步写入一个文件
    fs.writeFilsSync(); 同步写入一个文件
    
    var mime = require('mime');   实现文件类型和内容类型的转化
    mime.lookup(fileName);
    

##6. 写出几个global下的全局变量并注明其作用

    global
    process   进程对象
    Buffer  缓存区 暂时存放在内存的一段数据
    console  输出
    exprots  导出一个模块
    module   模块对象
    require  导入一个模块
    setInterval 
    setTimeout
    __dirname  当前文件的目录
    __filename 当前文件的绝对路径

##7. 写出几个process 下的几个属性或方法并注明其作用

    process.pid：当前进程的进程号。
    process.version：Node的版本，比如v0.10.18。
    process.platform：当前系统平台，比如Linux。
    process.title：默认值为“node”，可以自定义该值。
    process.argv：当前进程的命令行参数数组。
    process.env：指向当前shell的环境变量，比如process.env.HOME。
    process.execPath：运行当前进程的可执行文件的绝对路径。
    process.stdout：指向标准输出。
    process.stdin：指向标准输入。
    process.stderr：指向标准错误。
 
 
#代码题
##1. 如何在node中启用一个服务并监听8080端口

    var http = require('http');
    var server = http.createServer(function (req,res){});
    server.listen(8080);

##2. 实现一个简单的事件监听 包括添加监听  发射事件 移除监听


    var EventEmiter = require('events');
    var util = require('util');
    
    util.inherits(Person,EventEmiter);

    function Person (){ 
        
    }
    
    var p1 = new Person();
    
    p1.on('say',function (){ 
        console.log('今天天气不错！');
    });
    p1.emit('say');
    

##3. 如何读取一个txt文本，并且解决乱码问题

    var fs = require('fs');
    
    fs.readFile('index.html','utf8',function (err,data){ 
       console.log(data); 
    });


##4. 自己实现一遍buffer的拷贝方法
