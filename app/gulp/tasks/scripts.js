module.exports = function () {
    $.gulp.task('scripts-libs', function () {
        return $.gulp.src(['./app/source/js/**/*.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./app/build/js'));
        // .on('end', browserSync.reload);
    });
    $.gulp.task('scripts', function () {
        return $.gulp.src('./app/source/js/main.js')
            .pipe($.gulp.dest('./app/build/js'));
    });
};