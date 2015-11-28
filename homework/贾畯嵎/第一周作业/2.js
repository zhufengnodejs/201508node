/**
 * Created by Administrator on 2015/11/27.
 */


var EventEmitter=require('events');
var util=require('util');

function Show(){

}

var show=new Show();

show.on('click',function(){
    console.log(1)
})
show.emit('click');
show.removeListener('click');
