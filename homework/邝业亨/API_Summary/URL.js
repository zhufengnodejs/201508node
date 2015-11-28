var url = require('url');

var cpURL = 'http://work.o2obest.cn/index.php?m=task&f=view&task=333';

var urlObj = url.parse(cpURL); //把url转换成urlObj

var restoreUrl = url.format(urlObj); //把urlObj转换成url

console.log(urlObj);
console.log(restoreUrl);
