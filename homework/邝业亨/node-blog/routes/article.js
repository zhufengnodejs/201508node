var express = require('express');
var router = express.Router();
var checkLogin = require('../checkLogin');
var path = require('path');
var mongoM = require('../db');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'.'+path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });
router.get('/post',checkLogin.isLogin,function (req, res, next) {
    //console.dir(req.session.user);
    var json = {
        ctitle: '发表文章',
        article:{}
    };
    res.render('article/post',json);
});
router.post('/post',checkLogin.isLogin,upload.array('postImages'),function (req, res, next) {
    var articleInfo = req.body;
    var artId = articleInfo.id;
    if(artId){

    }else{
        articleInfo.user = req.session.user._id;
        articleInfo.postImages = [];
        req.files.forEach(function (item,i) {
            articleInfo.postImages[i] =  path.join('/upload',item.filename);
        });
        new mongoM('Article')(articleInfo).save(function (err, article) {
            if(err){
                res.redirect('back');
            }else{
                res.redirect('/');
            }
        });
    }
});

module.exports = router;