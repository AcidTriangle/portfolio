var preloader = (function () {
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
})();