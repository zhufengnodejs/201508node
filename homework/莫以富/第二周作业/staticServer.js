var fs = require('fs');
var http = require('http');
var mime = require('mime');
var url = require('url');
var crypto = require('crypto');
var server = http.createServer(function(req, res){
    var urlobj = url.parse(req.url);
    var filename = urlobj.pathname.slice(1);
    if(filename.length > 0 && filename != 'favicon.ico'){
        fs.exists(filename, function(exists){
            if(exists){
                //检查是否已经修改过了
                //return matchHandler(filename, req, res);
                //return etag(filename, req, res);
                return expirehandler(filename, req, res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        });
    }else{
        res.statusCode = 404;
        res.end();
    }

});
server.listen(8888);

/**
 * etag 方式的缺点： 增加服务器端的压力，计算sha1加密后的值，会增大服务器的cpu负担
 *
 * 有时候我们希望不发请求，有缓存就直接使用，不要发http请求了
 * Expires 过期时间
 * Cache-Control 缓存控制
 */
function expirehandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        res.setHeader('Expires',new Date(new Date().getTime()+600*1000).toUTCString());
        res.setHeader('Cache-Control','max-age=600');
        res.statusCode = 200;
        res.end(content);
    })
}
function expire(filename, req, res){
    fs.readFile(filename, function(err, data){
        //单位是毫秒
        var contype = mime.lookup(filename);
        if(!contype){
            res.setHead("content-type", contype);
        }
        try{
            res.setHeader('Expires',new Date(new Date().getTime()+600*1000).toUTCString());
            res.setHeader('Cache-Control','max-age=600');
            res.statusCode = 200;
            res.end(data);
            console.log(55555555555555);
        }catch(ee){
            console.log(ee);
        }
    });
}

/**
 * last-modify 的缺点：
 * 1.有可能内容没变化，只是修改时间变了
 * 2.有可能CDN的问题， 不同机器的文件内容一样，但修改时间不一样
 * 3.last-modify 的时间精度是秒级别的，对于毫秒级别的修改，没法检测到
 * etag 的实现原理类似 last-modify:
 * 1.浏览器端第一次请求资源的时候，服务器端根据文件的内容生成一个固定长度的md5值, 服务端把这个只作为etag 头的值发送给浏览器端
 * 2.当浏览器端发起第二次请求时，获取 etag 头的值， 然后服务器端 根据文件内容再次生成一个md5值
 * 3.服务器端对比 两个值
 * 如果不一样：取得最新的内容作为if-none-match 头的值，给浏览器端，同时发送 etag = 最新的md5值
 * 如果一样：返回 304
 */
function etag(filename, req, res){
    function _taghash(buf){
        var md5Gen = crypto.createHash("sha1");
        return md5Gen.update(buf).digest("base64");
    }
    function _fresh(newhash){
        res.writeHead(200, {
            "Etag": newhash,
            "content-type": mime.lookup(filename)
        });
        fs.createReadStream(filename).pipe(res);
    }
    var hash = req.headers['if-none-match'];
    fs.readFile(filename, function(err, data){
        newhash = _taghash(data);
        if(!hash || (newhash != hash)){//第一次访问
            _fresh(newhash);
        }else{
            res.writeHead(304);
            res.end();
        }
    });
}


//常见的三种缓存策略
/**
 * 截取自： news.baidu.com 上的响应头信息 和 请求头信息
 * Last-Modified:Sun, 09 Jun 2013 08:29:54 GMT  服务器发送给浏览器
 * If-Modified-Since:Thu, 19 Nov 2015 02:46:59 GMT 浏览器发给服务器
 * （注意这里的时间单位是秒级别的单位）
 *
 * 在浏览器端 执行f5 的效果和 点击刷新按钮的效果是不一样的，
 * 具体表现就是  f5 后，所有图片状态都是 200了，而 按刷新按钮的效果是 图片还是304 的
 * 原理:
 * 1.客户端第一次访问服务器，服务器会把此文件的修改事件和文件内容一起返回
 * 2.客户端收到文件后，会记录文件的最后修改时间并且缓存此文件
 * 3.当客户端再次需要此文件时，会把此文件的最后修改时间（If-Modified-Since）发给服务端
 * 4.服务端判断 浏览器端发送的最后修改时间  之后 这个文件有没有做修改
 * 有做修改 --> 响应最新的内容，并发送  Last-Modified， 把这个时间更新为最新的修改时间
 *如果没有修改， 响应 304
 */
function matchHandler(filename, req, res){
   function _fresh(mtime){
       res.writeHead(200, {
           "last-modified": mtime,
           "content-type": mime.lookup(filename)
       });
       fs.createReadStream(filename).pipe(res);
   }

    var lastMod = req.headers['if-modified-since'];
    if(!lastMod){//第一次访问
        _fresh( new Date().toGMTString());
    }else{
        fs.stat(filename, function(err, stat){
            if(Date.parse(stat.mtime) > Date.parse(lastMod)){
                _fresh(stat.mtime);
            }else{
                res.statusCode = 304;
                res.end();
            }
        });
    }
}

