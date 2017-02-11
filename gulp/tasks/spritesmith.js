'use strict'

module.exports = function() {
    $.gulp.task('sprite:img', function(){
        var spritePng = $.gulp.src('./source/images/**/*.{png,gif}')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.png.scss',
                imgPath: './build/assets/img/sprite.png'
            }));

        var imgStream = spritePng.img
            .pipe($.gulp.dest('./build/assets/img/'));
        var scssStream = spritePng.css
            .pipe($.gulp.dest('./source/style/common/'));

        return $.merge(imgStream, scssStream);
    });
};