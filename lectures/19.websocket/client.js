var WS = require('ws');
var ws = new WS('ws://localhost:8080/');
ws.on('open',function(){
    ws.send('hello node');
});
ws.on('message',function(data){
    console.log(data);
});