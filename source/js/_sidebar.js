var sidebar = (function () {
  var blog = document.querySelector('.blog'),
    sidebar = $('.blog-sb'),
    footerHeight = $('.footer').height(),
    sidebarHeight = sidebar.height(),
    articles = $('.blog-article'),
    sbLinks = $('.blog-sb__link');

  if (blog != null) {
    var blogPadding = parseInt(getComputedStyle(blog, null).paddingTop, 10);
  }

  var sidebarAttach = function () {

    var yOffset = window.pageYOffset;
    var pageHeight = $(document).height();
    var sidebarPos = sidebarHeight + yOffset + blogPadding,
      footerPos = pageHeight - footerHeight - blogPadding;

    if (yOffset >= blog.offsetTop) {
      sidebar.addClass('sb-fixed');
      sidebar.css('top', blogPadding + 'px');
    }
    else {
      sidebar.removeClass('sb-fixed');
    }

    if (sidebarPos >= footerPos) {
      var topPos = parseInt(sidebar.css('top')),
        diff = footerPos - sidebarPos;
      sidebar.css('top', topPos + diff + 'px');
    }
  };

  var clickChanged = function (link) {
    var yOffset = window.pageYOffset;
    var item = link.parent(),
      href = link.attr('href'),
      article = $(href),
      articleOffsetTop = article.offset().top - parseInt(article.css('margin-top'));

    $('html,body').animate({
      scrollTop: articleOffsetTop
    });

    item.addClass('active');
  };

  var scrollChanged = function () {
    var yOffset = window.pageYOffset;

    articles.each(function () {
      var $this = $(this),
        offsetTopArticle = $this.offset().top - parseInt($this.css('margin-top')),
        offsetBottomArticle = $this.offset().top + $this.width() - parseInt($this.css('margin-top')) * 2;

      if (yOffset>=offsetTopArticle && yOffset <= offsetBottomArticle) {
        var href = '.blog-sb__link[href="#' + $this.attr('id') + '"]',
          activeLink = $(href),
          activeItem = activeLink.parent();

        activeItem.addClass('active')
          .siblings().removeClass('active');
      }
    });
  };

  return {
    scroll: function () {
      sidebarAttach();
      scrollChanged();
    },
    click: function (elem) {
      clickChanged(elem);
    }
  };
})();