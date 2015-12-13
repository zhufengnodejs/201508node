function task1(callback){
 setTimeout(function(){
     callback('1');
 },1000);
}

function task2(data){
    console.log(data);
}
task1(task2);