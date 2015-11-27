var events = require('events');
var util = require('util');

function Person (name,age) {

}

util.inherits(Person,events);

var Me = new Person('邝业亨',25);

function listener () {
    console.log('大家好，我叫邝业亨，我来自广州');
    Me.removeListener('hello',listener);
}

Me.on('hello', listener);

Me.emit('hello');

Me.emit('hello');

