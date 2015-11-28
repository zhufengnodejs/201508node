var server = require('http').createServer(function(req,res){
    res.end('repl');
});

server.listen(8080,'localhost',function(){
    console.log('服务已启动');
});