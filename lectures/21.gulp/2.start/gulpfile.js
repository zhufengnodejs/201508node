var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
gulp.task('minify',function(){
    return gulp.src('app/less/page.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(minify())
        .pipe(rename('page.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default',['minify']);