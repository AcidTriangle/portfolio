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
    slider.click('down');
  });
  $('.slider__nav-link_prev').on('click', function (e) {
    e.preventDefault();
    slider.click('up');
  });

});

$('.blog-sb__link').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  sidebar.click($this);
});
