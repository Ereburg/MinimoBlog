module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src('./app/source/sass/style.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                errorLogToConsole: true,
                outputStyle: "compressed"
            }))
            .on('error', console.error.bind(console))
            .pipe($.gp.autoprefixer({
                cascade: true
            }))
            .pipe($.gp.csso())
            .pipe($.gp.rename({ suffix: '.min' }))
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('./app/build/css'))
            .pipe($.bs.stream());
    });
};