var express = require('express');
var fs = require('fs');
var app = express();
var formidable = require('formidable');

//console.dir(app);
//return;
var userArr = [];

app.use(function (req, res, next) {
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('X-UA-Compatible','IE=Edge,chrome=1');
    next();
});

app.get('/', function (req,res,next) {
    var rs = fs.createReadStream('./question-8.html');
    rs.pipe(res);
});
app.get('/login', function (req,res,next) {
    var rs = fs.createReadStream('./question-8-1.html');
    rs.pipe(res);
});

app.post('/register', function (req, res, next) {
    var dealForm = new formidable.IncomingForm();
    dealForm.parse(req, function (err, fields, files) {
        userArr.push(fields);
        res.end("<script>window.onload=function(){document.body.innerHTML = '注册成功，3秒后跳转到登录页';setTimeout(function() { window.location.href = '/login'; },3000)}</script>");
    });
});

app.post('/check', function (req, res, next) {
    console.log(userArr[0].username);
    console.log(userArr[0].password);
    var dealForm = new formidable.IncomingForm();
    dealForm.parse(req, function (err, fields, files) {
        if(fields.username == userArr[0].username && fields.password == userArr[0].password){
            res.end('登录成功,欢迎你的回来');
        } else {
            res.end('登录失败,请返回重新登录');
        }
    });
});

app.listen(8888, function () {
    console.log('服务器启动成功');
});