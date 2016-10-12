var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins();


gulp.task('js', function () {
  return gulp.src('src/js/bytesauce-*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('src/css/bytesauce-*.css')
    .pipe(plugins.sass())
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './'
  });

  gulp.watch("src/scss/*.scss", ["sass"]);
  gulp.watch(['*.html', 'src/**/templates/*.html', 'src/**/*.css', 'src/**/*.js']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src(["src/scss/*.scss", "!src/scss/_*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
