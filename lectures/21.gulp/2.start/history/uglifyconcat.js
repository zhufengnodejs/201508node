var gulp = require('gulp');
var concat = require('gulp-concat');//合并文件
var uglify = require('gulp-uglify')//压缩文件

gulp.task('uglify',function(){
    return gulp.src(['app/js/*.js','!app/js/*.tmp.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['uglify']);