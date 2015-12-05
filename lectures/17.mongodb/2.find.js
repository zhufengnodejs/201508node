var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//定义集合的存储数据结构
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
},{collection:'person'});

// 创建Model
var PersonModel = db.model("person", PersonSchema);
/*PersonModel.create([
    { name:"zfpx1", age:1 },
    { name:"zfpx2", age:2 },
    { name:"zfpx3", age:3 },
    { name:"zfpx4", age:4 },
    { name:"zfpx5", age:5 },
    { name:"zfpx6", age:6},
    { name:"zfpx7", age:7 },
    { name:"zfpx8", age:8 },
    { name:"zfpx9", age:9},
    { name:"zfpx10",age:10 }
], function(error,docs) {
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});*/

PersonModel.findById('56626ad8bb19a94012ab7dd5', function (err, doc){
    //doc 查询结果文档
    console.log(doc);
});