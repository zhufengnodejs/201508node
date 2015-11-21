#服务器
能提供服务的都是服务器
能提供定位，告诉别人在什么地方提供服务
如何找到一台计算机 IP地址=国风美唐四号楼
                端口号      =房间号
http 80 tcp 8080 ftp 21

#客户端
需要服务，能发起请求就叫客户
浏览器 命令行 QQ 微信 

#数据

#协议
人与人的通信
1. 传输手段 声波 无线电
2. 彼此都懂得一种语言
计算机世界里
1. 传输手段 网络  光纤 网卡
2. 数据 二进制
3. 格式 共同协商的一种语言

#一个普通网站的访问流程

1. 浏览器(其它的客户端)向服务器发送一个请求
2. 先解析域名，DNS域名解析服务器(chorme->搜索操作系统缓存->读取本地host文件->真正的DNS服务器)
3. 客户端通过随机端口通过TCP三次握手，与服务器建立连接
4. 浏览器要发送http请求
5. 服务器接收到浏览器的请求，解析请求参数和路径，经过后台的处理生成响应页面


##URL统一资源定位符
![url](http://7xjf2l.com2.z0.glb.qiniucdn.com/url.jpg)
#请求
请求的方法 请求的路径 协议
> GET / HTTP/1.1
请求头
> User-Agent: curl/7.30.0 客户端版本
> Host: localhost:8080 请求主机和端口
> Accept: */* 可以接收的文件类型

#响应
< HTTP/1.1 200 OK
< Date: Sat, 21 Nov 2015 07:59:00 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
<
hello

![请求和响应](http://7xjf2l.com2.z0.glb.qiniucdn.com/request.jpg)

#响应码
1xx  请求正在处理中 101
2xx  成功
3xx  重定向 
4xx  客户端错误  404请求的资源服务器端不存在
5xx  服务器端错误