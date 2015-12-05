/**
 * 处理post请求
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({extended:true}));
app.get('/reg',function(req,res){
    res.render('reg',{});
});
app.post('/reg',upload.array('avatar', 12),function(req,res){
    console.log(req.files);
    res.send(req.body);
});
app.listen(8080);