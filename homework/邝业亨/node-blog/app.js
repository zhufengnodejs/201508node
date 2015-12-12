var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//自己后来添加的模块
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var mongoM = require('./db');
var article = require('./routes/article');
//……………………………………………………………………
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//初始化数据库模型
mongoM.init();
//把会话保存到mongo
app.use(session({
  secret: 'hengji',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    db:'zfpx'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}));
app.use(flash());//使用flash
app.use(function (req, res, next) {
    if(req.session.user){
        res.locals.isLogin = true;
        res.locals.username = req.session.user.username;
        res.locals.user = req.session.user;
        req.flash('isLogin',true);
    } else {
        res.locals.isLogin = false;
        res.locals.username = '';
        res.locals.user = '';
        req.flash('isLogin',false);
    }
    res.locals.keyword ='';
    if(req.query.hasOwnProperty('keyword') && req.query.keyword != undefined){
        res.locals.keyword = req.query.keyword;
    }

    res.locals.ctitle = '亨记的博客';
    res.locals.title = '亨记的博客';
    res.locals.query = '';
    next();
});
//这里开始路由
app.use('/',routes);
app.use('/users', users);
app.use('/article', article);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
