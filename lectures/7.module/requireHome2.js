/**
 * id: '.', 当前模块的ID
 exports: {}, 当前模块的导出对象
 parent: null, 父亲 谁require导致自己生出来了
 children: [],儿子 它require了谁
 filename: 'e:\\201508node\\lectures\\7.module\\requireHome2.js',
 loaded: false,是否加载完成
 paths:
 *
 */
var home = require('home');
var express = require('express');
console.log(module);
//console.log(home);
//home.addX(5);