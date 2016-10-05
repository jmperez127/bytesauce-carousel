var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server:  './'
    });

    gulp.watch("src/scss/*.scss", ["sass"]);
    gulp.watch(['*.html', 'src/**/*.css', 'src/**/*.js']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);