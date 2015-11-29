var express = require('express');
/**
 * 模板
 * express 支持jade ejs
 * npm install ejs
 * 2.在express进行设置使用此模板
 *
 */
var app = express();
//静态文件
app.set('view engine','html');//设置模板的类型
app.set('views','view');
app.engine('.html',require('ejs').__express)
app.use(express.static(__dirname));
app.get('/a',function(req,res){
    res.render('reg',{title:'<h1>hello</h1>',username:'zfpx',password:'123'});
});
app.listen(8080);

