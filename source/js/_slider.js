var slider = (function () {
  var imgs = $('.slider__img-container_main'),
    prevImgs = $('.slider__img-container_prev'),
    nextImgs = $('.slider__img-container_next'),
    descs = $('.slider__desc-item'),
    currentDsc = $('.slider__desc-item.active'),
    imgsLength = imgs.length,
    currentImg = $('.slider__img-container_main.active'),
    counter = currentImg.index(imgs),
    prevImg = prevImgs.eq(count(counter, '-')),
    nextImg = nextImgs.eq(count(counter, '+'));

  function count(count, sign) {
    if (sign == '+') {
      return count >= imgsLength - 1 ? 0 : count + 1;
    }
    if (sign == '-') {
      return count <= 0 ? imgsLength - 1 : count - 1;
    }
  }

  function setImages(counter, time) {
    var tempCounter;
    return {
      activeImg: function () {
        imgs.eq(counter)
          .addClass('active')
          .css('opacity', '1')
          .siblings()
          .removeClass('active')
          .css('opacity', '0')
      },

      prevImg: function (button) {
        tempCounter = count(counter, '-');
        prevImgs.eq(count(counter, '-'))
          .css('top', '100%')
          .animate({
            top: '0'
          }, time, function () {
            $(this).siblings().css('top', '100%');
          });

        prevImgs.eq(count(tempCounter, button))
          .animate({
            top: '-100%'
          }, time);
      },

      nextImg: function (button) {
        tempCounter = count(counter, '+');
        nextImgs.eq(count(counter, '+'))
          .css('top', '-100%')
          .animate({
            top: '0'
          }, time, function () {
            $(this).siblings().css('top', '-100%');
          });

        nextImgs.eq(count(tempCounter, button))
          .animate({
            top: '100%'
          }, time);
      }
    };
  }

  function setDesc (counter) {
    descs.eq(counter)
      .addClass('active')
      .animate({'opacity': '1'}, 1000)
      .siblings()
      .removeClass('active')
      .animate({'opacity': '0'}, 1000)
  }

  var load = function () {
    currentImg.siblings().css('opacity', '0');
    currentDsc.siblings().css('opacity', '0');
    prevImg.css('top', '0');
    nextImg.css('top', '0');
  };

  var buttonsClick = function (direction) {
    var time = 1000,
      sign;

    if (direction == 'down') {
      counter = count(counter, '+');
      sign = '-';
    }
    else if (direction == 'up') {
      counter = count(counter, '-');
      sign = '+';
    }

    setImages(counter).activeImg();
    setImages(counter, time).prevImg(sign);
    setImages(counter, time).nextImg(sign);
    setDesc(counter);

  };

  return {
    click: function (direction) {
      buttonsClick(direction);
    },
    set: function () {
      load();
    }
  };
})();