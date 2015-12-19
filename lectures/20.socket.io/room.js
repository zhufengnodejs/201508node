var express = require('express');
var path = require('path');
var app = express();
app.use(function(req,res,next){
    console.log(req.url);
    next();
});
app.use(express.static(__dirname));
/*app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'room.html'));
});*/
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var messages = [];
io.on('connection',function(socket){
    var currentRoom ;
    socket.on('message',function(msg){
        messages.push(msg);
        if(currentRoom)
            io.sockets.in(currentRoom).emit('message', new Buffer("hello"));
            //socket.broadcast.to(currentRoom).emit('message', msg);
        else
            io.sockets.emit('message',  new Buffer("hello"));
            //socket.broadcast.emit('message', msg);
    });

    socket.on('join',function(room){
        currentRoom = room;
        socket.join(room);//进入某个房间
    });

});
server.listen(80);