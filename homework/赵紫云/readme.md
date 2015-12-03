#问答题
##1. 200HTTP响应是什么意思
    ###请求完成，并成功返回响应

##2. Connection:Keep-Alive头为什么很重要
    ###链接保持不断，减少链接数

##3. 如何导入一个模块
    ####require，ps：保证模块本身是全局或者在本地Node_modules目录下已经安装；

##4. 如何安装一个模块
   ### 通过Npm install命令可进行本地和全局安装；

##5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用

    ###url:
        ####1/parse  //将url字符串转换为对象并返回；
        ####2/resolve //拼接字符串，如无参数，则返回当前url；
        ####3/format //将url对象转化为字符串

    ###htttp:
        ####1/status_codes //状态码
        ####2/ServerRequest   //客户端请求内容；
        ####3/createServer //创建服务
        ####4/listen  //监听端口

    ###fs:
        ####1/readFile/readFileSync //读取文件
        ####2/writeFile/writeFileSync //在文件写入
        ####3/close/closeSync  //关闭文件
        ####4/rename/renameSync //重命名
        ####5/truncate/truncateSync //文件截取
        ####6/mkdir/mkdirSync //创建目录
        ####7/rmdir/rmdirSync //删除目录
        ####8/open/openSync //打开文件,根据参数flags的值分为：r:读取；r+读写；w:写入，不存在则创建；w+：读写模式，
        不存在则创建；a:以追加模式打开文件，不存在则创建；a+:读取追加模式打开，不存在则创建；
        ####9/read/readSync //读取数据并写入Buffer
        ####10/unlink/unlinkSync //删除文件
        ####11/stat/statSync //获取文件信息，如创建/更新/读取等时间；
    ###mime
        ####1/lookup


##6. 写出几个global下的全局变量并注明其作用

      ### 1/ process //进程；
          ####  process下有：version; arch;platform;argv;env.path;pid;chdir;cwd;memoryUsage;nextTick;
            stdout;stderr;stdin;exit;kill;

        ###2/buffer //二进制缓存区；
           #### buffer下有poolSize;ifBuffer;isEncoding;concat;compare;byteLength;

       ### 3/cleraImmediate;setImmediate;set/clearInterval;set/clearTimeout;

        ###4/require;//导入模块

        ###5、module /module.exports 作为模块的返回值使用；


##7. 写出几个process 下的几个属性或方法并注明其作用
    ###1/nextTick，
    ###2/exit;退出当前进程
    ###3/version //当前实例的版本号;
    ###4/platform，//当前操作系统；
    ###5/pid //进程ID；
    ###6/chdir //改变运行目录；
    ###7/cwd ,当前工作目录;
    ###8/memoryUsage();内存使用情况
    ###9/kill ;干掉某个进程;
 
#代码题
##1. 如何在node中启用一个服务并监听8080端口
   ### var http=require("http");
    ###var serve=http.createServer(arguments);
   ### serve.listen("8080","localhost,callback);

##2. 实现一个简单的事件监听 包括添加监听  发射事件 移除监听
    ###var events=require("events");
    ###var util=require("util");
    ###util.inherits("ev",events) //为动作源继承events模块的方法
   function ev(){};
    var sourceEv=new ev(); //创建动作源实例
    function tar(a,b){
        this.a=a;
        this.response=b；
    };
    ###var targetEv1=new tar(1,2);//创建动作事件实例
   ### sourceEv.on("event1",targetEv1.response) //添加监听事件;
   ### sourceEv.emit("event1");//发射事件

##3. 如何读取一个txt文本，并且解决乱码问题
  ###  var fs=require("fs")//引入模块；
    fs.readFile("text.name","utf8",function(err,data){
        //回调方法；
        if(err) throw err;
        console.log(data)
    })

