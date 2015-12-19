var express = require('express');
var path = require('path');
var app = express();
app.use(function(req,res,next){
    console.log(req.url);
    next();
});
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection',function(socket){
    socket.send('欢迎光临服务器');
    socket.on('message',function(msg){
         console.log(msg);
         socket.send('确认:'+msg);
    });
});
server.listen(80);