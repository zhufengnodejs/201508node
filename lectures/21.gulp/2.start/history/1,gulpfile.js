var gulp = require('gulp');

gulp.task('a',function(){
    console.log('a');
});

gulp.task('b',function(){
    console.log('b');
});


gulp.task('default',function(){
    gulp.src('static/js/**/*.*') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
        .pipe(gulp.dest('build'));  // 写入 'build/somedir/somefile.js'
});

