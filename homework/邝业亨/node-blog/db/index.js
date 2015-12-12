var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/zfpx');
var ObjectId = mongoose.Schema.Types.ObjectId;
var mongoS = mongoose.Schema;
var mongoM = function (name, schema, collection, skipInit) {
    return mongoose.model(name, schema, collection, skipInit);
};
var userSchema = new mongoS({
    username: String,
    password: String
});
var articleSchema = new mongoS({
    postTitle:String,
    postContent:String,
    postImages:[],
    user:{type:ObjectId,ref:'User'}//对象ID类型，引用User
});
mongoM.init = function () {
    mongoM('User',userSchema);
    mongoM('Article',articleSchema);
};

module.exports = mongoM;