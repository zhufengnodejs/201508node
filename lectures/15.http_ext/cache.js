
var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function(req,res){
 if(req.url =='/favicon.ico'){
   return res.end('404');
 }
 //   /page.js
 var filename = req.url.slice(1);//获取访问的文件名
    console.log(req.url);
 //matchHandler(filename,req,res);
  // etagHandler(filename,req,res);
  expirehandler(filename,req,res);
}).listen(8080);

/**
 *  last-Modified 最后修改时间 服务器发给客户端的
 *  if-Modified-since  在最后的修改时间之后是否又有新的修改 客户端发给服务器的
 *  1.第一次客户端访问服务器，服务器会把此文件的修改时间和文件内容一起返回
 *  2.客户端收到文件后，会记录此文件的最后修改时间并且缓存此文件
 *  3.当客户端再次需要此文件的时候，会把此文件的最后修改时间(if-Modified-since)发回给服务器
 *  4.服务器进行判断是修改时间之后有没有修改过
 *     没修改 返回304 告诉客户缓存可用
 *     修改过 返回最新的文件内容和最新的最后修改时间(last-Modified)
 */
function matchHandler(filename,req,res){
    //获取请求过来的缓存文件的最后修改时间
    var lastModified = new Date(req.headers['if-modified-since']);
    //比较
    fs.stat(filename,function(err,stat){
        if(stat.mtime.getTime()-lastModified.getTime()<=1000){
            res.statusCode = 304;
            res.end('');
        }else{
            //如果文件有更新
            res.setHeader('Last-Modified',stat.mtime.toGMTString());
            res.writeHead(200);
            fs.createReadStream(filename).pipe(res);
        }
    })
}

/*
 1.有可能是内容没改，只是修改时间改了
 2.有可能CDN的问题，不同机器上的文件内容一样，但时间不同
 3.不够精确，只能精确到秒。

 etag entity tag 实体标签的缩写
 根据实体的内容生成的一段字符中。可以标识资源的状态。
 etag是服务器生成的，发送给客户端，客户端不关心你的etag如何生成的

 1.第一次服务器生成etag发给客户端
 2.第二次客户端把if-none-match发给服务器
 3.服务器判断此etag是否有变化
     有变化 响应200 并发回最新内容
     无变化 响应304
 */
function etagHandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        var hash = gethash(content);//计算文件最新的md5值
        var nonematch = req.headers['if-none-match'];
        if(hash == nonematch){
            res.statusCode = 304;
            res.end();
        }else{
            res.setHeader('Etag',hash);
            res.end(content);
        }
    })
}

function gethash(str){
    return crypto.createHash('sha1').update(str).digest('base64');// hex base64 utf8  ascii
}
/**
 * 有些时候我们希望不发请求确认，有缓存就直接使用，不要发HTTP请求
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