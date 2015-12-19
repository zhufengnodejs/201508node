var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copy-html',function(){
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());//立刻刷新
});

gulp.task('watch',function(){
    gulp.watch('app/index.html',['copy-html']);
});

gulp.task('server',function(){
    connect.server({
        root:'dist',//服务器的根目录
        port:8080, //服务器的地址，没有此配置项默认也是 8080
        livereload:true//启用实时刷新的功能
    });
});
//运行此任务的时候会在8080上启动服务器，
gulp.task('default',['server','watch']);