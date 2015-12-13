var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(function(req,res,next){
    console.log(req.method,req.url);
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type");
    next();
});
app.get('/user',function(req,res){
    res.send([{"name":"xiaomi"},{"name":"iphone"}]);
});
app.get('/user/:uid',function(req,res){
    res.send({"name":"xiaomi","uid":req.params.uid});
});

app.put('/user/:uid',function(req,res){
    console.log(req.body);
    res.send(req.body);
});

app.use(function(req,res,next){
    res.end('404');
});
app.listen(8000);
