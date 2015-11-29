/**
 * Created by Administrator on 2015-11-29.
 */
var location = 'http://zfpx:123@localhost:8080/a/b/index.html?name=zfpx&age=6#top';
var url = require('url');
console.log(url.parse(location,true));