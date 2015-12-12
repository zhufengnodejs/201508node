var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var field = 'zhangsan';
app.use(function(req,res,next){
    console.log(req.method,req.url);
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type");
    next();
});

app.post('/api/check',function(req,res){
    var body = req.body;
console.log(field , body);
    if(field == body.field){
        res.send({isunique:false});
    }else{
        res.send({isunique:true});
    }

});
app.use(function(req,res,next){
    res.end('404');
});
app.listen(8000);
