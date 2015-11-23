####创建一个新的空的文件夹
mkdir file_name

***cd file_name

####列出所有的文件夹  包括隐藏的文件夹
***ls -all

####删除暂存区
git rm --cached index.html

####查看当前的仓库的版本
git remote -v
增加一个老师的仓库 (teacher 是自己添加的)
**git remote add teacher https://github.com/zhufengnodejs/201508node.git
####从老师的仓库更新
git pull teacher master

#####创建文件
touch .gitignore
***
一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。
通常都是些自动生成的文件，像是日志或者编译过程中创建的等等。我们可以创建一个名为 .gitignore 的文件，
列出要忽略的文件模式，
4.配置说明
以斜杠“/”开头表示目录；
以星号“*”通配多个字符；
以问号“?”通配单个字符
以方括号“[]”包含单个字符的匹配列表；
以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

.[ab] 任何以a和b结尾的文件
.css 以js结尾的文件
*.css 以js结尾的文件
!index.js 除了index.js都可以忽略
\!index.js 文件名为!index.js
***

ctrl + R =》 netstat 查看本地端口
### curl命令 查看客户端http请求
### curl -v
### curl -H 向头部写入数据
$ curl http://localhost:8090
$ curl www.baidu.com
$ curl -H 'name:lishangxi' -H 'age:20' -v http://localhost:8090
* Rebuilt URL to: http://localhost:8090/
* timeout on name lookup is not supported
*   Trying 127.0.0.1...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to localhost (127.0.0.1) port 8090 (#0)
> GET / HTTP/1.1
> Host: localhost:8090
> User-Agent: curl/7.45.0
> Accept: */*
> name:lishangxi
> age:20
>
< HTTP/1.1 200 OK
< Date: Sat, 21 Nov 2015 08:02:29 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
<
{ [10 bytes data]
100     5    0     5    0     0    161      0 --:--:-- --:--:-- --:--:--  5000hello
* Connection #0 to host localhost left intact


