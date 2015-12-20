// generated on 2015-12-19 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

//处理CSS
gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')//得到所有的sass文件
//流的问题 当遇到错误的时候，会报错并调用unpipe方法退出
//plumber 重写unpipe方法，并且报错不退出。
    .pipe($.plumber())
    .pipe($.sourcemaps.init())// 为生成sourcemap文件做准备的
    .pipe($.sass.sync({
      outputStyle: 'expanded',//http://sass-lang.com/documentation/file.SASS_REFERENCE.html
      precision: 10,//保留10位小数
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))//自动添加厂商扩展
    .pipe($.sourcemaps.write())//写入对照文件
    .pipe(gulp.dest('.tmp/styles'))//输出到目标路径
    .pipe(reload({stream: true}));//自动刷新浏览器
});
//进行代码检查的
function lint(files, options) {
  return () => {
    return gulp.src(files)//得到所有的源文件
      .pipe(reload({stream: true, once: true}))//重新加载
      .pipe($.eslint(options))
      .pipe($.eslint.format())//对代码进行检查
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/*.html')
    .pipe(assets)//获取里面所有的外链的资源 js css
    // main.js main.css vendor.js vendor.css
    .pipe($.if('*.js', $.uglify()))//对JS文件进行压缩
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))//对CSS文件进行压缩
    .pipe(assets.restore())//恢复原始的资源
    .pipe($.useref())//修改html里面的引用
    //conditionals 不移除对IE处理  loose 多个空格的话至少保留一个空格
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))//
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')//取到所有的图片
    //cache保证一个图片只压一次
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,//渐进式扫描
      interlaced: true,//隔行描述 先发奇数行，再发偶数行
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});
//拷贝字体
gulp.task('fonts', () => {
  //通过读取bower.json配置文件读取到所有的第三方的前端框架文件
  return gulp.src(require('main-bower-files')({
    //过滤器，按glob进行过滤
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

//启动一个本地的服务
gulp.task('serve', ['styles', 'fonts'], () => {
  //启动一个服务器
  browserSync({
    notify: false,//是否通知
    port: 9000,//端口号
    server: {//服务器配置
      baseDir: ['.tmp', 'app'],//设置静态文件目录
      routes: {//路由
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);//当这些文件变化时自动重启服务器

  gulp.watch('app/styles/**/*.scss', ['styles']);//当sass变化时编译saas
  gulp.watch('app/fonts/**/*', ['fonts']);//拷贝字体
  gulp.watch('bower.json', ['wiredep', 'fonts']);//把bower文件插入index.html
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/ //忽略路径
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  //统计文件的大小gzip 统计当启用gzip压缩后的大小
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
