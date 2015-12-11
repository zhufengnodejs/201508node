/**
 * Created by caomei on 2015/12/5.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');

//express路由工具
var router = express.Router();

//发送过来的数据格式
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();//每个中间有中止请求的权利，不调next
});

//静态文件服务器  静态文件以 __dirname/public作为根目录的意思
app.use(express.static(path.join(__dirname, 'public')));


//对于html类型的模板调用ejs __express来进行渲染(让ejs模板文件使用扩展名为html的文件)
app.set('view engine','html');//指定模板引擎
//设置模板引擎和页面模板的位置
app.set('views', path.join(__dirname, 'views')); //模板文件以 __dirname/views作为根目录的意思
app.engine('html',require('ejs').__express);


app.get('/index',function(req,res){

    res.render('index',{username:'admin'});
});


//express路由工具Router:

//路由以链式的方式依次处理get put post delete 等http请求
router.route('/login') //当路径为/login时
    .get(function(req, res) {
        res.render('login', { title: '111' });
    })
    .post(function(req, res) {
        var user={
            username: 'admin',
            password: '123456'
        }
        console.log(req.body)
        if(req.body.username === user.username && req.body.password === user.password){

            res.redirect('/index');
            return;
        }
        res.redirect('/login');//否则用户名密码验证不通过  返回登陆页面

    });

app.use('/', router);


app.listen(8081)
