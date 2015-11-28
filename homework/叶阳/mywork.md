1. 200HTTP响应是什么意思

    "200":成功
2. Connection:Keep-Alive头为什么很重要

    Keep-Alive使客户端到服务端的连接持续有效，当出现对服务器的后续请求时，该功能避免了建立或重新建立连接。
3. 如何导入一个模块

    用require（）方法，例如 var mod=require('./mod');
4. 如何安装一个模块

    npm install "模块名"
5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用

    1、url模块：
        -url.parse(urlStr, [parseQueryString], [slashesDenoteHost]); 输入 URL 字符串，返回一个对象urlObj。

        -url.format(urlObj);输入一个 URL 对象urlObj，返回格式化后的 URL 字符串。

        -url.resolve(from, to);给定一个基础URL路径，和一个href URL路径，并且象浏览器那样处理他们可以带上锚点。
        例如：
            url.resolve('/one/two/three', 'four')         // '/one/two/four'

            url.resolve('http://example.com/', '/one')    // 'http://example.com/one'

            url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

    2、http模块：
        -http.createServer([requestListener]);
               返回一个新的web服务器对象 参数是一个函数， 它将会自动加入到 'request' 事件的监听队列.

        -http.request(options, callback);http.request()
                返回一个 http.ClientRequest类的实例。ClientRequest实例是一个可写流对象。如果需要
                用POST请求上传一个文件的话，就将其写入到ClientRequest对象。

                options可以是一个对象或一个字符串。如果options是一个字符串, 它将自动使用url.parse()解析。

        -http.get(options, callback);
                因为大部分的请求是没有报文体的GET请求，所以Node提供了这种便捷的方法。
                该方法与http.request()的唯一区别是它设置的是GET方法并自动调用req.end()。

    3、fs模块：
        -fs.readFile(filename, [options], callback);
            异步读取一个文件的全部内容。回调函数传递了两个参数 (err, data), data 就是文件的内容。
            如果未指定编码方式，原生buffer就会被返回。

        -fs.readFileSync(filename, [options]);
            fs.readFile的同步版本。 返回文件名为 filename 的文件内容。如果 encoding 选项被指定，那么这个函数返回一个字符串。
            如果未指定，则返回一个原生buffer。

    4、mime模块：
        - mime.lookup(filePath) ;
            使用mime模块设定文件类型，是 一个工具，实现文件类型和内容类型的转换 filePath参数是文件路径
6. 写出几个global下的全局变量并注明其作用

    -__filename; 表示当前正在执行的脚本的文件名。
            它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径

    -__dirname; 当前文件(执行脚本)所在的目录

    -process; 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

    -setTimeout(cb, ms);全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
            返回一个代表定时器的句柄值

    -clearTimeout(t);全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的计算器。

    -setInterval(cb, ms);全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
                         返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
                         setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
7. 写出几个process 下的几个属性或方法并注明其作用

    -argv //可以获取命令行参数 例如：process.argv.forEach(function(arg,index){
                                    console.log(index,arg);
                                });

    -env.Path  //可以获取环境变量的值 ，实现生产环境和开发环境切换的配置
    -pid: 2280, //可以获取进程的id
    -chdir: [Function: chdir], //可以改变当前工作的目录，'..'是回到上一级 ;如果操作失败抛出异常。
    -cwd: [Function: cwd],     //返回当前(进程)的工作目录
    -memoryUsage: [Function: memoryUsage],//返回一个对象，描述了 Node 进程所用的内存状况，内存使用情况,单位为字节。
    -stdout: [Getter],//标准输出
    -stderr: [Getter],//标准错误
    -stdin: [Getter],//标准输入
    -exit: [Function],//退出进程
    -kill: [Function],//可以杀死一个进程 process.kill(pid) pid：进程的id
    -console.log(process);//打印输出
代码题
1. 如何在node中启用一个服务并监听8080端口

    var http=require('http');
    var server=http.createServer(function(req,res){
        res.end('服务')
    });
    server.listen(8080,'localhost',function(){
        console.log('服务已启动');
    });
2. 实现一个简单的事件监听 包括添加监听 发射事件 移除监听

    var EventEmitter=require('events');  //事件模块
    var util=require('util');
    util.inherits(All,EventEmitter);  //All对象 继承EventEmitter与继承他的构造函数

    function All(){};   //构造函数
    var All=new All();  //对象

    All.addListener('ask',function(){     //添加事件监听
        console.log('who are you?')
    })
    All.addListener('ask1',function(){     //添加事件监听
        console.log('where do you come from?')
    })
    All.removeListener('ask1',function(){    //移除事件监听
        console.log('where do you come from?')
    })
    All.emit('ask');                   //发射事件（触发一个事件）

    function Person(name,response){
        this.name=name;
        this.response=response;
    }
    var p1=new Person('gogo',function(){
        console.log('我是gogo')
    })
    var p2=new Person('sandy',function(){
        console.log('我是sandy')
    })
    All.addListener('who',p1.response);  //添加事件监听
    All.addListener('who',p2.response);  //添加事件监听
    All.removeListener('who',p1.response);//移除事件监听
    All.emit('who');   //发射事件（触发一个事件）
3. 如何读取一个txt文本，并且解决乱码问题

    var http=require('http');
    var fs=require('fs');
    var readTxt=function(req,res){
       //var content= fs.readFileSync('1.txt','utf8');  //同步读取
       //res.end(content);

       fs.readFile('1.txt','utf8',function(err,data){ //异步读取
            if(err){
                console.log('失败')
            }else{
                res.end(data)
            }
       })
    }
    var server=http.createServer(readTxt);
    server.listen('8080');

    ****如果readFile && readFileSync 指定了编码utf8，但是文件本身的编码是ANSI（或其它），则会始终无法
        把中文写入文件，一直乱码，读取正常
    ****使用node.js开发时，无论是代码文件，还是要读写的其它文件，都建议使用UTF8编码格式保存，
        这样可以无需额外的模块支持
4. 自己实现一遍buffer的拷贝方法

    Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
        var length = sourceEnd - sourceStart > targetBuffer.length - targetStart ?
        targetBuffer.length - targetStart : sourceEnd - sourceStart
        for(var i=sourceStart;i<sourceStart+length;i++){
            targetBuffer[targetStart++] = this[i];
        }
    }


    var buf1=new Buffer('开心','utf8');
    var buf2=new Buffer('这是激动的事','utf8');
    buf1.cp(buf2,6,0,6);
    console.log(buf2.toString());
    //这是开心的事