var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
var personSchema = new mongoose.Schema({name : String});
//新增加一个实例 方法
/*personSchema.method('greet', function () {
    console.log('how are you');
})*/


//var Person = mongoose.model('person', personSchema);
//entity
//var person = new Person();

//person.greet(); //how are you

personSchema.static('findByName', function (name, callback) {
    return this.find({ name: name }, callback);
});

var PersonModel = db.model("person", personSchema );

PersonModel.findByName('zfpx', function (err, docs) {
    //docs所有名字叫zfpx的文档结果集
    console.log(docs);
});