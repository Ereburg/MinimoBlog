module.exports = function () {
    $.gulp.task('server', () => {
        $.bs.init({
            server: {
                baseDir: "./app/build"
            },
            port: 3000,
            browser: "google chrome"
        });
        $.gulp.watch('./app/source/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/source/sass/**/*.sass', $.gulp.series('styles'));
        $.gulp.watch([
            './app/build/**/*.php',
            './app/build/**/*.html',
            './app/build/**/*.js'
        ]).on('change', $.bs.reload);
        // browserSync.watch('./app/build', browserSync.reload);
    });
};