var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var crypto = require('crypto');
app.set("view engine", "html");
app.set('views', __dirname + "\/view");
app.engine(".html", require('ejs').__express);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/bower_components'));
app.get("/reg", function(req, res){
    res.render("reg", {});
});
var users = [];
app.post("/reg", function(req, res){
    var exists = false;
    if(req.body.confirmPassword!= req.body.password){
        return res.end(JSON.stringify({status:1, msg:'两次密码不一致！'}));
    }
    var user = {username: req.body.username, password: req.body.password};
    for(var i = 0, total = users.length; i<total; i++){
        var cur = users[i];
        if(cur.username == req.body.username){
            exists = true;
            break;
        }
    }
    res.setHeader("content-type", "application/json; charset=utf-8");
    if(exists){
        return res.end(JSON.stringify({status:1, msg:'用户名已存在!'}));
    }else if(req.body.pwd != req.body.repwd){
        return res.end(JSON.stringify({status:1, msg:'两次输入的密码不一致！'}));
    }else{
        users.push({username: user.username, password: hash(user.password)});
        console.log("users: ", users);
        return res.end(JSON.stringify({status:0}));
    }
});

app.post('/login', function(req, res){
    var exists = false;
    for(var i= 0, total = users.length; i<total; i++){
        cur = users[i];
        if(cur.username == req.body.username && cur.password == hash(req.body.password)){
            exists = true;
        }
    }
    res.setHeader("content-type", "application/json; charset=utf-8");
    if(exists){
        res.end(JSON.stringify({status:0}));
    }else{
        res.end(JSON.stringify({status:1, msg:'用户名或密码错误'}));
    }
});

app.get('/login', function(req, res){
    res.render('login', {});
});
app.get('/index', function(req, res){
    res.render('index', {});
});

function hash(str){
    return crypto.createHash("sha1").update(str).digest("base64");
}
app.listen(8080);
