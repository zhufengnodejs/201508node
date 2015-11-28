var http = require('http');

var serverCallback = function (req,res) {
    var reqUrl = req.url;

    if(/\/favicon/g.test(req.url)) {
        console.log('请求网站图标');
    } else {
        console.log(req.headers);
        console.log(req.method);
        console.log(req.httpVersion);
        console.log(req.url);

        res.statusCode = 200;
        res.statusMessage = 'successful';
        res.setHeader('Content-Type','text/html; charset=utf-8');
        console.log(res._headerSent);
        res.write('nodejs服务器响应成功');
        console.log(res._headerSent);
        res.end();
    }



    //console.dir(req);
    //res.write('hello nodejs');
    //res.end(function () {
    //    console.log(111);
    //    console.log(arguments);
    //});
};

var server = http.createServer(serverCallback);

server.listen(8899,'localhost', function () {
    console.log('服务器启动成功O(∩_∩)O');
});

