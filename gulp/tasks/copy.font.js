'use strict';

module.exports = function() {
    $.gulp.task('copy:font', function() {
        return $.gulp.src('./source/fonts/**/*.ttf')
            .pipe($.gulp.dest($.config.root + '/assets/fonts'));
    });
};
