var flip = (function () {
  var authBtnFront = $('.auth-btn-front');
  var authBtnBack = $('.auth-btn-back');
  var authBlock = $('.auth');
  var authFront = $('.auth-front');
  var authBack = $('.auth-back');

  var front = function () {
    authBtnFront.fadeOut(500);
    authBlock.addClass('auth-flip');

    setTimeout(function(){
      authFront.hide();
      authBack.css('display', 'block');
    }, 300);
  };

  var back = function () {
    authBtnFront.fadeIn(500);
    authBlock.removeClass('auth-flip');

    setTimeout(function () {
      authBack.hide();
      authFront.css('display', 'block');
    }, 300);
  };

  return {
    init: function () {
      $('.auth-btn-front').on('click', function (e) {
        e.preventDefault();
        front();
      });
      $('.auth-btn-back').on('click', function (e) {
        e.preventDefault();
        back();
      })
    }
  }
})();