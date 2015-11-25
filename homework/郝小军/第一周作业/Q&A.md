#问答题
##1. 200HTTP响应是什么意思
    200为相应状态码，表示成功
    #响应码
    1xx  请求正在处理中 101
    2xx  成功
    3xx  重定向
    4xx  客户端错误  404请求的资源服务器端不存在
    5xx  服务器端错误
##2. Connection:Keep-Alive头为什么很重要
    当服务器收到附带有Connection: Keep-Alive的请求时，它也会在响应头中添加一个同样的字段来使用Keep-Alive。这样一来，客户端和服务器之间的HTTP连接就会被保持，不会断开（超过Keep-Alive规定的时间，意外断电等情况除外），当客户端发送另外一个请求时，就使用这条已经建立的连接
    在HTTP/1.1版本中，官方规定的Keep-Alive使用标准和在HTTP/1.0版本中有些不同，默认情况下所在HTTP1.1中所有连接都被保持，除非在请求头或响应头中指明要关闭：Connection: Close  ，这也就是为什么Connection: Keep-Alive字段再没有意义的原因。另外，还添加了一个新的字段Keep-Alive:，因为这个字段并没有详细描述用来做什么，可忽略它
##3. 如何导入一个模块
    require("name")
##4. 如何安装一个模块
    npm install name         局部安装
    npm install name@1.1.0   安装需要的版本
    npm install name -g      全局安装
##5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用
    url
        parse(url,true)//true表示把查询字符串转成对象
    http
        createServer:创建一个服务
    fs
        readFileSync(path,code)同步
        readFile(path,code,callback)异步
    mime
        lookup(filename)更具文件后缀查找该文件对应类型
##6. 写出几个global下的全局变量并注明其作用
    __dirname:当前文件所属的目录
    __filename:当前文件的目录
    console:输出处理
    process:进程处理
    nexttick:异步加载 优先级：高
    setImmediate:异步加载 优先级：较高
    setTimeout:异步加载 优先级：一般
    setInterval:异步加载 优先级：一般
    clearTimeout:清除定时器
##7. 写出几个process 下的几个属性或方法并注明其作用
    stdout：标准输出流。
    stderr：标准错误流。
    stdin：标准输入流。
    argv：属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
    execPath:返回执行当前脚本的 Node 二进制文件的绝对路径。
    execArgv:返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数。
    env:返回一个对象，成员为当前 shell 的环境变量
    exitCode:进程退出时的代码，如果进程通过 process.exit() 退出，不需要指定退出码。
    version:Node 的版本，比如v0.10.18。
    versions：一个属性，包含了 node 的版本和依赖.
    config：一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。
    pid：当前进程的进程号。
    title：进程名，默认值为"node"，可以自定义该值。
    arch：当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。
    platform：运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
    mainModule：require.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模块。