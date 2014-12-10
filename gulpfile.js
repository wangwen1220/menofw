// 引入 gulp
var gulp = require('gulp');

// 引入组件
var nib = require('nib');
// var btStylus = require('bootstrap-stylus');
var stylus = require('gulp-stylus');
// var cssmin = require('gulp-cssmin');
// var seajs = require('gulp-seajs');
// var CMDTrans = require('gulp-cmd-transport');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
// var concat = require('gulp-concat');
// var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
// var livereload = require('gulp-livereload');
var clean = require('gulp-clean');
var copy = require('gulp-copy');
var zip = require('gulp-zip');

var app = {
  src: './**',
  destfile: [
    './*.htm?',
    './*.php',
    './favicon.*',
    './css/**',
    './js/**',
    './img/**',
    '!./**/bak/*',
    '!./**/bower_components/*',
    '!./**/spm_modules/*',
    '!./**/*.styl',
    '!./**/*.coffee',
    '!./**/*.psd',
    '!./**/*-debug.*',
    '!./**/*-bak.*'
  ],
  zip: ['./dist/**'],
  // 没搞懂怎样压缩和排除目录
  // zip: [
  //   './*.php',
  //   './*.htm?',
  //   './favicon.*',
  //   './**/css/*',
  //   './**/js/*',
  //   './**/img/*',
  //   './**/upload/*',
  //   '!./**/bower_components/*',
  //   '!./**/spm_modules/*',
  //   '!./**/bak/*',
  //   '!*-bak.*'
  // ],
  dest: 'dist',
  watch: ['./**/*.php', './**/*.htm?', './**/*.css', './**/*.js', './img/**/*'],

  stylus: {
    src: 'css/main.styl',
    dest: 'css',
    watch: 'css/*.styl'
  },

  coffee: {
    src: 'js/*.coffee',
    dest: 'js',
    watch: 'js/*.coffee'
  },

  js: {
    debug: 'js/*-debug.js',
    src: 'js/*.js',
    dest: 'js',
    watch: 'js/*.js'
  },

  img: {
    src: 'img/**/*',
    dest: 'img',
    watch: 'img/**/*'
  }
};

// 清空目标文件夹
gulp.task('clean', function(cb) {
  return gulp.src(app.dest, {read: false})
    .pipe(clean());
});

// 复制文件到目标文件夹
gulp.task('copy', function() {
  return gulp.src(app.destfile)
    .pipe(copy(app.dest));
});

// 压缩文件
gulp.task('zip', function() {
  gulp.src(app.zip)
    .pipe(zip('app.zip'))
    .pipe(gulp.dest(app.dest));
});

// 创建 stylus 任务
gulp.task('stylus', function() {
  gulp.src(app.stylus.src)
    .pipe(stylus({
      compress: true,
      use: [nib()]
    }))
    // .pipe(cssmin())
    .pipe(gulp.dest(app.stylus.dest));
    // .pipe(livereload());
});

// 创建 coffee 任务
gulp.task('coffee', function() {
  return gulp.src(app.coffee.src)
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest(app.coffee.dest));
});

// 合并压缩 JS
gulp.task('jsmin', function() {
  gulp.src(app.js.debug)
    .pipe(watch())
    // .pipe(concat('all.js'))
    // .pipe(rename({suffix: '-min'}))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace(/-debug$/, '');
    }))
    .pipe(uglify())
    .pipe(gulp.dest(app.js.dest));
});

// 检查脚本
gulp.task('lint', function() {
  gulp.src(app.js.debug)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Copy all static images
// gulp.task('img', function() {
//   return gulp.src(app.img.src)
//     .pipe(imagemin({
//       optimizationLevel: 5
//     }))
//     .pipe(gulp.dest('build/img'));
// });

// 打包文件
// gulp.task('zip', function() {
//   gulp.src(app.zip)
//     .pipe(zip('app.zip'))
//     .pipe(gulp.dest(app.dest));
// });

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(app.stylus.watch, ['stylus']);
  // gulp.watch(app.coffee.watch, ['coffee']);
  gulp.watch(app.js.debug, ['jsmin']);
  // gulp.watch(app.img.src, ['img']);
});

// livereload task
// gulp.task('livereload', function() {
//   livereload.listen();
//   gulp.watch(app.watch).on('change', livereload.changed);
// });

// The default task (called when you run `gulp` from cli)
// gulp.task('default', ['stylus', 'coffee', 'jsmin', 'watch']);
gulp.task('default', ['stylus', 'jsmin', 'watch']);

// 打包文件
gulp.task('build', ['clean', 'copy', 'zip']);