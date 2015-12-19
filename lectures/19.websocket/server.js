var WebsocketServer = require('ws').Server;
var wss = new WebsocketServer({port:8080});
//当连接到来的时候会调用回调函数
wss.on('connection',function(ws){
    //当收到客户端消息的时候
    ws.on('message',function(message){
        console.log(message);
        //向客户端发送消息
        //ws.send('confirm:'+message);
        ws.send(new Buffer([1,2,3]));
    });
});