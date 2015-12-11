var fs = require('fs');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var formidable = require('formidable');

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var phn = urlObj.pathname;
    if(phn == '/favicon') {
        res.end(404);
        return;
    }

    if(phn == '/'){
        var rs = fs.createReadStream('./question-6.htm');
        rs.pipe(res);
    }

    if(/\/uploadFile/i.test(phn)){
        var dealFormData = new formidable.IncomingForm();
        dealFormData.parse(req, function (err, fields, files) {
            for(var file in files){
                (function (file) {
                    var rs = fs.createReadStream(files[file].path);
                    var ws = fs.createWriteStream('./'+files[file].name);
                    rs.pipe(ws);
                }(file));
            }
            //console.dir(files['file[0]'].name);
            res.end();
        });
    }
});

server.listen(8888,'localhost', function () {
    console.log('服务器启动成功');
});