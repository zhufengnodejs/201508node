//var flash = require('connect-flash');
module.exports = {
    isLogin: function (req,res,next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/users/login');
        }
    },
    isNotLogin: function (req, res, next) {
        if (req.session.user) {
            res.redirect('back');
        } else {
            next();
        }
    }
};