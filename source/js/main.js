var ScrollParallax = function () {
    var layer1 = document.querySelector('.hero-parallax-layer-1');
    var layer2 = document.querySelector('.hero-parallax-layer-2');
    var layer3 = document.querySelector('.hero-parallax-layer-3');
    var layer4 = document.querySelector('.hero-parallax-layer-4');

    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount +'%';
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

var Blur = function () {
    var wrapper = document.querySelector('.feedback'),
        form = document.querySelector('.feedback__blur');


    return {
      set: function () {
        var imgWidth = document.querySelector('.reviews__background-img').offsetWidth,
            posLeft = -wrapper.offsetLeft,
            posTop = -wrapper.offsetTop,
            blurCss = form.style;

        console.log(posLeft, posTop);
        blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
        blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      }
    }
};

var parallaxScroll = ScrollParallax();
var blur = Blur();

blur.set();

window.onscroll = function() {
  var wScroll = window.pageYOffset;

  parallaxScroll.init(wScroll);
};

window.onresize = function () {
    blur.set();
};