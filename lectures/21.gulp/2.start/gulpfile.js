var gulp = require('gulp');
gulp.task('test',function(){
    console.log('test');
});

gulp.task('default',function(){
    console.log(arguments);
  gulp.run('test');
});