var express = require('express');
/**
 * 中间件是处理HTTP请求的通用函数,用来完特定的任务
 * 检查用户登陆，分析数据
 * 一个中间件处理完成，才能处理下一个中间件
 * next调用下一个中间件或路由函数
 */
var app = express();

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();//每个中间有中止请求的权利，不调next
});

app.use(function(req,res,next){
    //1.用户是否登陆
    var islogin = true;//假设用户已经登陆
    var url = req.url;
    if('/post' == url){
        return next();
    }
    if('/reg' == url || '/login' == url){
        return res.end('你已经登陆了，不要再访问这个页面了');
    }
    next();

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
app.all('/post',function(req,res){
    res.end('发表文章');
});
app.all('*',function(req,res){
    res.end('你想的页面走丢了');
});
app.listen(8080);