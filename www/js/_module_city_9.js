$(function() {
  if (app.getBreakpoint() !== "xs") {
    var tween = TweenMax.fromTo('.animated-9', 1, {
      opacity: 0,
      "margin-top": "200px"
    }, {
      opacity: 1,
      "margin-top": "0px"
    });
    var sence = new ScrollMagic.Scene({
        triggerElement: '.animated-9',
        offset:100
      }).setTween(tween)
      //.addIndicators()
      .addTo(scrollMagicController);
  }else{
    $('.animated-9').css({
      opacity:1
    });
  }
});