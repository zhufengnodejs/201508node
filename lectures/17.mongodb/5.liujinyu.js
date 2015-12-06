var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/liujinyu");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});

//定义集合的存储数据结构
var StudentSchema = new mongoose.Schema();
StudentSchema.add({
    name : { type:String },
    age  : { type:Number, default:0 }
})
StudentSchema.method('savePersonAge',function(){
    this.age += 1;
    this.save();
})
// 创建Model
var StudentModel = db.model("student", StudentSchema);
var studentEntity = new StudentModel({
    name : "小明",
    age  : 100
});
studentEntity.savePersonAge();
