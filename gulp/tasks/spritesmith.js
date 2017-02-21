'use strict'

module.exports = function() {
    $.gulp.task('sprite:img', function(){
        var sprite = $.gulp.src('./source/sprite/**/*.{png,gif}')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.png.scss',
                cssFormat: 'css',
                imgPath: './build/assets/img/sprite.png',
                padding: 30
            }));

        var imgStream = sprite.img
            .pipe($.gulp.dest('./build/assets/img/'));
        var scssStream = sprite.css
            .pipe($.gulp.dest('./source/style/common/'));

        return $.merge(imgStream, scssStream);
    });
};