var http = require('http');
var url  = require('url');
var fs  = require('fs');
var formidable = require('formidable')
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if(pathname =='/favicon.ico'){
        return res.end('404');
    }
    else if(pathname=='/reg'){
        fs.createReadStream('./h5Ajax.html').pipe(res);
    }else if(pathname == '/ajax'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,filed,files){
            var obj = {
                username:filed.username,
                password:filed.password,
                photo:[]
            }
            var photo = 0;
            for(var file in files){
                console.log(files[file].path);
                fs.createReadStream(files[file].path).pipe(fs.createWriteStream('upload/'+files[file].name));
                obj['photo'].push('./upload/'+files[file].name);

            }
            console.log(JSON.stringify(obj));
            res.end(JSON.stringify(obj));

        })
    }else{
        fs.createReadStream('.'+pathname).pipe(res)
    }


}).listen(8080);