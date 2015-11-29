var express = require('express');
/**
 * 如何接收参数，如何发响应
 */
var app = express();
//静态文件
app.use(express.static(__dirname));
app.use(function(req,res,next){
   console.log(req.host,req.path);
    next();
});
app.get('/reg',function(req,res){
   // res.end(JSON.stringify(req.query));
    //向客户端发送响应，并智能处理不同的类型的数据
    res.send(req.query);
});
//取路径参数
app.get('/login/:username/:password',function(req,res){
    // res.end(JSON.stringify(req.query));
    res.send(req.params.password);
});

app.listen(8080);

