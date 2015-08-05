$(function() {
  $('.prod-thumb').click(function() {
    var el = $(this);
    $('.prod-thumb').removeClass('active');
    el.addClass('active');
    $('#big-show').fadeOut(800, function() {
      $('#big-show').attr('src', el.data('src')).fadeIn(800);
    });

  });

  var tween = TweenMax.fromTo('.animate-1', 1, {
    opacity: 0,
    "margin-top": "200px"
  }, {
    opacity: 1,
    "margin-top": "0px"
  });

  var sence = new ScrollMagic.Scene({
      triggerElement: '.animate-1',
      offset:-300

    }).setTween(tween)
    //.addIndicators()
    .addTo(scrollMagicController);
});