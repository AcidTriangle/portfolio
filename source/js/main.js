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
  fullscreen.init();
  preloader.init();
  flip.init();
  scroll.init();
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


});

$('.blog-sb__link').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  sidebar.click($this);
});
