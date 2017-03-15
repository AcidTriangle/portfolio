var blur = (function () {
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
})();
