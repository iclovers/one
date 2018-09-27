$(function () {
    var $slider = $('#demo-slider-0');
    var counter = 0;
    var getSlide = function() {
      counter++;
      return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
        (Math.floor(Math.random() * 4) + 1) + '.jpg" />' +
        '<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
    };

    $('.js-demo-slider-btn').on('click', function() {
      var action = this.getAttribute('data-action');
      if (action === 'add') {
        $slider.flexslider('addSlide', getSlide());
      } else {
        var count = $slider.flexslider('count');
        count > 1 && $slider.flexslider('removeSlide', $slider.flexslider('count') - 1);
      }
  });
  aload();
})
function aload(){
  var aload_icon = document.querySelector('.load_icon');
  var load_animation = document.querySelector('.load_animation');
  var layout = document.querySelector('.layout');
  var index = 0;
  var timerId = setInterval(function(){
      aload_icon.style.backgroundPosition = 'left '+ (-index * 51.4)/50 + 'rem';
      index++;
      if (index == 25) {
          clearInterval(timerId);
          load_animation.style.display = 'none';
          layout.style.width = '6.4rem';
      }
  },60)
}