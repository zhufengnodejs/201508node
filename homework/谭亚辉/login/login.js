var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.set('views', __dirname + '/view');
app.engine('.html', require('ejs').__express);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var users = [];

app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.static(__dirname + '/view'));

app.get('/login', function (req, res) {
    res.render('login');
});
var id = 0;
app.post('/register', function (req, res) {
    users.push({
        id: ++id,
        username: req.body.username,
        paw: req.body.paw
    });

    res.send('注册成功');
});

app.get('/home', function (req, res) {
    res.render("home", {
        message: req.query.message
    });
});

app.post('/home', function (req, res) {
    console.log(req.body);
    for(var i=0;i<users.length;i++){
        if(req.body.username == users[i].username && req.body.password == users[i].paw){
            res.status(200).send({
                message: '登录成功'
            });
        }else{
            res.end("failed", {
                message: '登录失败'
            });
        }
    }
});


app.listen(3000);