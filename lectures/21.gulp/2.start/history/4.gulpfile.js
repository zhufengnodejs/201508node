var gulp = require('gulp');
var Q = require('q');
var mny = 0;
gulp.task('a',function(){
    var defer = Q.defer();
    setTimeout(function(){
        console.log('a');
        defer.resolve();
    },3000);
    return defer.promise;
});

gulp.task('b',function(){
    console.log(mny);
});


gulp.task('default',['a','b']);

