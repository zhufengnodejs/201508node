var gulp = require('gulp');
gulp.task('test',function(){
    console.log('test');
});

gulp.task('default',function(){
    var watcher = gulp.watch('client/**/*.js', ['test']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});