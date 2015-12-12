var express = require('express');
var router = express.Router();
var checkLogin = require('../checkLogin');
var mongoM = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.hasOwnProperty('keyword') && req.query.keyword != undefined){
    var queryRex = new RegExp(req.query.keyword,'i');
    new mongoM('Article').find({$or:[{postTitle:queryRex},{postContent:queryRex}]},function (err,articles) {
      res.render('article/detail', {articles:articles});
    });
  } else {
    new mongoM('Article').find(function (err,articles) {
      res.render('article/detail', {articles:articles});
    });
  }

});

module.exports = router;
