global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./app/gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('server', 'styles', 'scripts-libs', 'scripts')
    // gulp.parallel('watch', 'server')
));


// gulp.task('watch', function() {
//     gulp.watch('./app/source/pug/**/*.pug', gulp.series('pug'));
//     gulp.watch('./app/source/sass/**/*.sass', gulp.series('styles'));
// });