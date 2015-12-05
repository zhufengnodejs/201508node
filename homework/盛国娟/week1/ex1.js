var http =  require('http');

server = http.createServer(function(req,res){
	res.end("My first server");
})

server.on(8080,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:8080/');
})

