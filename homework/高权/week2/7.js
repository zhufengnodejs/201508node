/*
 写一个静态文件服务器并使用任意一个缓存策略
 就是只要用户输入了一个文件的路径，就能得到这个文件的内容并且按正确的格式进行渲染*/

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
app.use(express.static(path.join(__dirname)));
app.use(function(req,res){
    fs.readFile('/*',function(err,content){
        res.setHeader('Expires',new Date(new Date().getTime()+600*1000).toUTCString());
        res.setHeader('Cache-Control','max-age=600');
        res.statusCode = 200;
        res.end(content);
    })
});

app.listen(8080);