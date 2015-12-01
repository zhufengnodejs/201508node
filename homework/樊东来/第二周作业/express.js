var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer=require('multer');
var session = require('express-session');
var app = express();
var fs  = require('fs');
app.set('views engine','html');
app.set('views','views');
app.engine('.html',require('ejs').__express);
app.use(session({
    secret:'fdl',
    resave:true,
    saveUninitialized:true
}));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static')));
app.use(express.static(path.join(__dirname,'uploads')));
app.use(function (req, res, next) {
    res.setHeader('content-type','text/html;charset=utf8');
    next();
});
app.use(function (req, res, next) {
    if(req.url=='/home'){
        if(!req.session.username){
            return res.render('reg')
        }

    }
    if(req.url=='/login'){
        if(req.session.username){
            return res.render('home',{'user':req.session.username,'photo':req.session.photo})
        }

    }
    next();
})
app.get('/',function (req, res) {
    res.render('reg');
});
app.post('/reg', upload.single('avatar'), function (req, res) {
    var user = {
        user:req.body,
        photo:req.file.originalname
    };
    var path ='./1.json';
    if(fs.existsSync(path)){
        var data = fs.readFileSync(path,'utf8');
        var arr = JSON.parse(data);
    }else{
        var arr = [];
    }
    arr.push(user);
    fs.writeFileSync(path,JSON.stringify(arr))
    res.redirect('/login')
});
app.get('/login', function (req, res) {

    res.render('login');
});
app.post('/login', function (req, res) {
    var username = req.body.username;
    var password= req.body.password;
    var path ='./1.json';
    var data = fs.readFileSync(path,'utf8');
    var arr = JSON.parse(data);
    for(var i = 0; i<arr.length;i++){
        if((username==arr[i].user.username)&&(password==arr[i].user.password)) {
            //成功后 进入主页
            req.session.username = arr[i].user.username;
            req.session.photo = arr[i].photo;
            return res.redirect('/home');
        }
    }
    res.redirect('/')

});
app.get('/home', function (req,res) {
    res.render('home',{'user':req.session.username,'photo':req.session.photo})
})
app.listen(3000);
