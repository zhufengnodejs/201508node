/**
 * 8.用express实现一个注册登录的功能
 * 1.用户访问 /显示注册表单。
 * 2.点击注册按钮，先把当前用户填写的内容得到保存内存。 [{username:'zhangsan',password:'lisi'}]保存之后跳到登陆页。
 * 3.在登陆页填写用户和密码，点击登陆，
 * 4.后台判断用户名和密码是否正确 ，如果匹配则跳到欢迎页， 如果不匹配返回重新填写登陆表单。
 **/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var userList = [{ username: 'aaa', password: 'bbb' },
    { username: 'ccc', password: 'ddd' }];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret:'zfpx',
    resave:true,
    saveUninitialized:true
}));

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    next();
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    //req.session.username
    res.render('index', {username:req.session.username||'请登录'});
});

app.get('/favicon.ico', function(req, res){
    //req.session.username
    res.statusCode = 404;
    res.end();
});

app.get('/reg', function(req, res){
    res.render('reg', {});
});

app.post('/reg', function(req, res){
    console.log(req.body);
    userList.push(req.body);
    //console.log(userList);
    res.redirect('/login');
});

app.get('/login', function(req, res){
    if(req.session.username){
        console.log(req.session.username);
        res.redirect('/')
    }else{
        res.render('login', {});
    }
});

app.post('/login', function(req, res){
    for(var i=0; i<userList.length; i++){
        if(req.body.username == userList[i].username
            &&req.body.password == userList[i].password){
            console.log(session);
            req.session.username = req.body.username;
            return res.redirect('/');
        }
    }
    res.redirect('login');
});

app.all('*', function(req, res){
    res.statusCode=404;
    res.end('没找到！');
});

app.listen(8080);


