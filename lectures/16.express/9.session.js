/**
 * 处理post请求
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');
var app = express();
app.set('view engine','html');//设置模板的类型
app.set('views','view');
app.engine('.html',require('ejs').__express);
//app.use(bodyParser.json());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')//存储的目的地
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })
app.use(session({
    secret:'zfpx',
    resave:true,
    saveUninitialized:true
}));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/reg',function(req,res){
    res.render('reg',{});
});
app.post('/reg',upload.array('avatar', 12),function(req,res){
    console.log(req.files);
    req.session;
    res.send(req.body);
});
app.get('/login',function(req,res){
    req.session.username= 'zhangsan';
    res.redirect('/welcome');//重向定
    //res.render('reg',{});//直接渲染注册页面
});
app.get('/welcome',function(req,res){
    res.send( req.session.username);
});
app.listen(8080);