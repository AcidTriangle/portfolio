var parallax = (function () {
  var layer1 = document.querySelector('.hero-parallax-layer-1');
  var layer2 = document.querySelector('.hero-parallax-layer-2');
  var layer3 = document.querySelector('.hero-parallax-layer-3');
  var layer4 = document.querySelector('.hero-parallax-layer-4');

  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      var style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },

    init: function (wScroll) {
      this.move(layer1, wScroll, 60);
      this.move(layer2, wScroll, 30);
      this.move(layer3, wScroll, 30);
      this.move(layer4, wScroll, 25);
    }
  }
})();