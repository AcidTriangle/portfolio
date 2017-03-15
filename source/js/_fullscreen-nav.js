var fullscreen = (function () {
  var pageName = window.location.pathname;
  pageName = pageName.substr(pageName.lastIndexOf(("/")) + 1);
  var navHref = '.fs-nav__link[href="./' + pageName + '"]',
    fsLink = $(navHref),
    fsNav = $('.fs-nav'),
    fsContent = $('.fs-nav__content'),
    inAction = false;

  fsLink.parent().addClass('active');

  return {
    init: function () {
      $('.burger').on('click', function () {
        var $this = $(this);

        if (inAction) return;

        inAction = true;

        if ($this.hasClass('active')) {
          $this.removeClass('active');
          fsNav.removeClass('active');

          fsContent.animate({opacity: 0}, 1000);

          setTimeout(function () {
            inAction = false;

            fsNav.css('display', 'none')
          }, 2000);

          return;
        }

        fsNav.css('display', 'flex');
        $this.addClass('active');

        setTimeout(function () {
          fsNav.addClass('active');
        }, 300);

        fsContent.animate({opacity: 1}, 1300, function () {
          inAction = false;
        });

      });
    }
  };
})();