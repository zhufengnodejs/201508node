/**
 * Created by Administrator on 2015-11-29.
 */
//var location = 'http://zfpx:123@localhost:8080/a/b/index.html?name=zfpx&age=6#top';
var location = 'http://localhost:8080/reg';
var url = require('url');
var urlObj = url.parse(location,true);
console.log(url.format(urlObj));