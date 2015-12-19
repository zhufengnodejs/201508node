var gulp = require('gulp');
var sass = require('gulp-less');

gulp.task('less',function(){
    return gulp.src('app/less/*.less')
        .pipe(sass()).pipe(gulp.dest('dist/css'));
});

gulp.task('default',['less']);