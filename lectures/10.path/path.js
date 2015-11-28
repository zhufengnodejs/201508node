/**
 * path
 */
var fs = require('fs');
var path = require('path');
/**
 * normalize正常 规范 将非标准路径转化为标准路径
 * 1) 解析. ..
 * 2) 多个杠转成一个杠
 * 3) windows linux mac 杠 \ /
 * 4) 如果是斜杠结尾，则保留
 */
console.log(path.normalize('./../a////b//d//../c//e//'));
// ..\a\b\c\e\

/**
 * join 将多个参数值字符串结合成一个路径字符串
 *
 */
console.log(path.join(__dirname,'a','b','..','c'));
// E:\201508node\lectures\10.path\a\c

/**
 * resolve
 * 以应用程序根目录为起点，根据参数的值解析出一个绝对路径
 * 1.以应用程序根目录为起点
 * 2. . 当前目录  ..上级目录
 * 3.普通字符串代表当前目录的下一级目录
 * 4. /代表盘符根目录
 * 5.如果没有下一个参数，返回当前路径
 */
console.log(path.resolve());
console.log(path.resolve('/a','..','b','msg','a.txt'));
console.log(path.resolve('a','..','b','msg','a.txt'));
//e:\201508node\lectures\10.path
// e:\b\msg

/**
 * relative 获取两个路径之间的相对路径
 * path.relative(from,to)
 * 返回的是在第一个路径里，如何用相对路径 去引用第二个路径
 */
console.log(path.relative('a','b/c.js'));
// a  index.js
// b/c.js
// script src="b/c.js"

/**
 * dirname 获取路径所属的目录
 * 目录的话 返回上一级目录
 * 如果是文件 返回此文件所属的目录
 */
console.log(path.dirname(__dirname));
console.log(path.dirname('path.js'));

/**
 * basename 获取一个路径的文件名
 * path
 * ext
 */
console.log(path.basename('a/b/index.js','.js'));
//index.js
//获取文件的扩展名
console.log(path.extname('a/b/index.js'));
//路径分隔符
console.log(path.sep);
//环境变量分隔符
console.log(path.delimiter);


