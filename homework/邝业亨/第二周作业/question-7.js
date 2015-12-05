var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var phn = urlObj.pathname;
    if(phn == '/favicon.ico') {
        res.end('404');
        return;
    }

    if(phn == '/'){
        var rs = fs.createReadStream('./question-7.html');
        rs.pipe(res);

    } else {
        var ifModifiedSince = req.headers['if-modified-since'];
        if (typeof ifModifiedSince === 'undefined') {
            fs.stat('.'+phn, function (err, stats) {
                var mt = stats.mtime.getTime();
                res.setHeader('last-modified', mt);
                var rs = fs.createReadStream('.'+phn);
                rs.pipe(res);
            });
        } else {
            fs.stat('.'+phn, function (err, stats) {
                var mt = stats.mtime.getTime();
                var difTime = mt - ifModifiedSince;
                if (difTime <= 1000) {
                    res.statusCode = 304;
                    res.end();
                } else {
                    res.setHeader('last-modified', mt);
                    var rs = fs.createReadStream('.'+phn);
                    rs.pipe(res);
                }

            });
        }
    }
    //if(phn == '/'){
    //    var rs = fs.createReadStream('./question-7.html');
    //    rs.pipe(res);
    //} else {
    //    expTime = new Date(new Date().getTime()+315360000*1000).toUTCString();
    //    res.setHeader('Expires',expTime);
    //    res.setHeader('Cache-Control','max-age=315360000');
    //    res.statusCode = 200;
    //    var rs = fs.createReadStream('.'+phn);
    //    rs.pipe(res);
    //}
});

server.listen('8888','localhost', function () {
    console.log('服务器启动成功');
});
