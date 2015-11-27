var mime = require('mime');

var fileType = mime.lookup('.html');
var fileType1 = mime.lookup('.js');
var fileType2 = mime.lookup('.css');
console.log(fileType);
console.log(fileType1);
console.log(fileType2);

var typeExt = mime.extension('text/css');

console.log(typeExt);