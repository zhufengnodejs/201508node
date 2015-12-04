var express = require('express');
var path = require('path');
var bodyParser  =require('body-parser');
var app = express();
var user = [];
app.set('view engine','html');//设置模板的类型
app.set('views','./');
app.engine('.html',require('ejs').__express);
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.render('reg');
});
app.get('/login',function(req,res){
    res.render('login');
});

app.post('/reg',function(req,res){
    user = req.body;
    res.redirect('/login');
});
app.post('/login',function(req,res){
    if(user.username == req.body.username&&user.password == req.body.password){
        res.render('welcome');
    }else{
        res.redirect('/login');
    }
});
app.listen(8080);