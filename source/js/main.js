var sliderButtons = $('.slider__nav-link');
var toggleClasses = function () {
  sliderButtons.addClass('active');
  setTimeout(function () {
    sliderButtons.removeClass('active')
  }, 1000);
};

window.onload = function () {
  if($('.feedback').length)
    blur.set();
};

window.onscroll = function () {
  if ($('.blog-sb').length) {
    sidebar.scroll();
  }
  if ($('.parallax').length) {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
  }
};

window.onresize = function () {
  if($('.feedback').length)
    blur.set();
};

$(function () {
  //preloader init
  preloader.init();

  //fullscreen navigation init
  if($('.fs-nav').length)
    fullscreen.init();

  //flip in auth page init
  if($('.auth').length)
    flip.init();

  //scroll arrown init
  if ($('.nav-arrow').length)
    scroll.init();

  if ($('.slider'))
    slider.set();

  //slider controls
  $('.slider__nav-link_next').on('click', function (e) {
    e.preventDefault();

    if (sliderButtons.hasClass('active')) return;

    slider.click('down');
    toggleClasses();
  });
  $('.slider__nav-link_prev').on('click', function (e) {
    e.preventDefault();
    if (sliderButtons.hasClass('active')) return;

    slider.click('up');
    toggleClasses();
  });

  //auth warnings
  $('.auth__btn_submit').on('click', function () {
    if (!validation.content($('.auth-form__input'))) {
      return false;
    }
  });

  //feedback warnings
  $('.feedback__btn_submit').on('click', function () {
    validation.content($('.feedback__input'));
  });

  $('.auth-form__input,.feedback__input').on('focus', function () {
    validation.focus($(this));
  })

});

$('.blog-sb__link').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  sidebar.click($this);
});
