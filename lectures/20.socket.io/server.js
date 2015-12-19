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
var users = [];
io.on('connection',function(socket){
    var user;
    console.log(users);
    socket.emit('nickname','请输入呢称:');
    //socket.send('欢迎光临服务器');
    socket.on('message',function(msg){
        //广播给除了自己之外的所有有人
        console.log('广播',user+":"+msg);
        socket.broadcast.emit('message', user+":"+msg);
    });
    socket.on('nickname',function(nickname){
        if(!user)
           user = nickname;
        console.log('user',user);
        users.push(nickname);
    });
});
server.listen(80);