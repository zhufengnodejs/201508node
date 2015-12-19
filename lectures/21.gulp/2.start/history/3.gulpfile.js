var gulp = require('gulp');
var Q = require('q');
var mny = 0;
gulp.task('a',function(callback){
    setTimeout(function(){
    console.log('a');
    callback();
    },3000);

   /* process.nextTick(function(){
        mny+=10;
        callback();
    });*/
});

gulp.task('b',function(){
    console.log(mny);
});


gulp.task('default',['a','b']);

