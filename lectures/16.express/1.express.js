/**
 * express
 * 模板解析 静态文件服务 中间件 路由控制等
 * 还支持各种各样的插件
 * 1.安装express
 *  npm install express
 * 2.
 */

var express = require('express');
var app = express();
//next 下一个
app.use(function(req,res,next){
  res.setHeader('Content-Type','text/html;charset=utf-8');
    next();//每个中间有中止请求的权利，不调next
});
app.get('/',function(req,res){
    res.end('/');
});
app.get('/reg',function(req,res){
    res.end('注册');
});
app.get('/login',function(req,res){
    res.end('登陆');
});
var http = require('http');
var server = http.createServer(app);
server.listen(8080);