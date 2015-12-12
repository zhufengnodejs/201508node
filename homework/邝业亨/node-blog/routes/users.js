var express = require('express');
var router = express.Router();
var checkLogin = require('../checkLogin');
var mongoM = require('../db');
/* GET users listing. */

//登录页
router.get('/login',checkLogin.isNotLogin,function(req, res, next) {
  res.render('users/login',{ctitle: 'login'});
});

//注册页
router.get('/register',checkLogin.isNotLogin,function(req, res, next) {
  res.render('users/register',{ctitle: 'register'});
});

//接收 注册 表单数据
router.post('/registerInfo', function (req,res,next){
  var user = req.body;
  var userCol = new mongoM('User');
  userCol.findOne({username:user.username},function (err, findObj) {
    if(err == null && findObj){
      res.send("<script>alert('用户已经存在');window.history.go(-1);</script>");
    }else{
      new mongoM('User')(user).save(function (err,user) {
        if(err){
          res.redirect('/users/register');
        }else{
          res.redirect('/users/login');
        }
      });
    }
  });
});
//接收 登录 表单数据
router.post('/loginInfo', function (req,res,next){
  var user = req.body;
  var userCol = new mongoM('User');
  userCol.findOne(user,function (err, findObj) {
    if(err == null && findObj){
      req.session.user = findObj;
      res.redirect('/');
    }else{
      res.send("<script>alert('用户名或密码错误，请重新输入');window.history.go(-1);</script>");
    }
  });
});
//退出登录
router.get('/loginOut', function (req,res,next){
  req.session.user = undefined;
  res.redirect('back');
});

module.exports = router;
