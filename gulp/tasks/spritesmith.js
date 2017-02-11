'use strict'

module.exports = function() {
    $.gulp.task('sprite:img', function(){
        var spritePng = $.gulp.src('./source/images/**/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.png.scss',
                imgPath: './build/assets/img/sprite.png'
            }));
        var imgStream = spritePng.img
            .pipe($.gulp.dest('./build/assets/img/'));
        var scssStream = spritePng.css
            .pipe($.gulp.dest('./source/style/common/'));
        var pngSprite = $.merge(imgStream, scssStream);

        var spriteGif = $.gulp.src('./source/images/**/*.gif')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.gif',
                cssName: 'sprite.gif.scss',
                imgPath: './build/assets/img/sprite.gif'
            }));
        imgStream = spriteGif.img
            .pipe($.gulp.dest('./build/assets/img/'));
        scssStream = spriteGif.css
            .pipe($.gulp.dest('./source/style/common/'));
        var gifSprite = $.merge(imgStream, scssStream);

        return $.merge(pngSprite, gifSprite)
    });
};