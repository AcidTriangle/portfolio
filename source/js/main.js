var scrollParallax = function () {
    var layer1 = document.querySelector('.hero-parallax-layer-1');
    var layer2 = document.querySelector('.hero-parallax-layer-2');
    var layer3 = document.querySelector('.hero-parallax-layer-3');
    var layer4 = document.querySelector('.hero-parallax-layer-4');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe + ', 0)';

            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(layer1, wScroll, 60);
            this.move(layer2, wScroll, 30);
            this.move(layer3, wScroll, 30);
            this.move(layer4, wScroll, 25);
        }
    }
};

var blurObject = function () {
    var wrapper = document.querySelector('.feedback'),
        form = document.querySelector('.feedback__blur');


    return {
        set: function () {
            var imgWidth = document.querySelector('.reviews__background-img').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCss = form.style;

            blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
};

var preloader = function () {
    var percentsTotal = 0;
    var preloader = $('.preloader');
    var circle = $('.preloader__circle');
    var dashArray = circle.css('stroke-dasharray');

    var imgPath = $('*').map(function (i, el) {
        var background = $(el).css('background-image');
        var isImg = $(el).is('img');
        var isVideo = $(el).is('video');
        var path = '';


        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }
        if (isImg) {
            path = $(el).attr('src');
        }
        if (isVideo) {
            path = $(el).attr('src');
        }
        if (path) return path;
    });
    var setPercents = function (total, current) {
        var percents = Math.ceil(current / total * 100);

        $('.preloader__perc').text(percents + '%');

        var dashOffset = dashArray - (dashArray / 100 * percents);

        circle.css('stroke-dashoffset', dashOffset);

        if (percents >= 100) {
            preloader.fadeOut();
        }
    };

    var loadImages = function (images) {
        if (!images.length)
            preloader.fadeOut();

        images.forEach(function (img, i, images) {
            var fakeImage = $('<img>', {
                attr: {
                    src: img
                }
            });

            fakeImage.on('load error', function () {
                percentsTotal++;
                setPercents(images.length, percentsTotal);
            });
        });
    };

    return {
        init: function () {
            var scroll = $('body');

            var imgs = imgPath.toArray();

            loadImages(imgs);

            scroll.css('overflow-y', 'auto');
        }
    }
};

var flip = function () {
    var authBtnFront = $('.auth-btn-front');
    var authBtnBack = $('.auth-btn-back');
    var authBlock = $('.auth');
    var authFront = $('.auth-front');
    var authBack = $('.auth-back');

    return {
        front: function() {
            authBtnFront.hide();
            authBlock.addClass('auth-flip');

            setTimeout(function(){
                authFront.hide();
                authBack.css('display', 'block');
            }, 300);
        },
        back: function () {
            authBtnFront.show();
            authBlock.removeClass('auth-flip');

            setTimeout(function () {
                authBack.hide();
                authFront.css('display', 'block');
            }, 300);
        }
    }
};

var parallaxScroll = scrollParallax();
var blur = blurObject();
var preload = preloader();
var flipper = flip();

window.onload = function () {
    blur.set();
};

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallaxScroll.init(wScroll);
};

window.onresize = function () {
    blur.set();
};

$(function () {
    preload.init();

    $('.auth-btn-front').on('click', function (e) {
        e.preventDefault();
        flipper.front();
    });

    $('.auth-btn-back').on('click', function (e) {
        e.preventDefault();
        flipper.back();
    })

});