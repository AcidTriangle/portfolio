var scroll = (function () {
  var arrowDown = $('.nav-arrow_down');
  var arrowUp = $('.nav-arrow_up');


  var scroll = function (position, duration) {
    $('html,body').animate({
      scrollTop: position
    }, duration);
  };

  return {
    init: function () {
      arrowDown.on('click', function (e) {
        var sectionHeight = $('.hero,.blog-hero').height();

        e.preventDefault();
        scroll(sectionHeight, 1000);
      });

      arrowUp.on('click', function (e) {
        e.preventDefault();
        scroll(0, 1500);
      });
    }
  };
})();