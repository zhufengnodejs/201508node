var EventEmitter = require('events');
var util = require('util');
util.inherits(Teacher,EventEmitter);

function Teacher(){
}
var teacher = new Teacher();
function Student(name,response){
    this.name = name;
    this.response = response;
}

var stu1 = new Student('Lucy',function(){
    console.log('I want to ask a question about Node.js');
})

var stu2 = new Student('Lily',function(){
    console.log('I want to ask a question about JS');
})
teacher.addListener('questions',stu1.response);
teacher.on('questions',stu2.response);
teacher.emit('questions');
teacher.emit('questions');
teacher.removeListener('questions',stu2.response);
