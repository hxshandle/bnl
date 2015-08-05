$(function() {
  var root = $('.module-city-4-performance-hero');
  var tween = new TweenMax.to('.module-city-4-performance-hero h3', 0.5, {
    opacity:1,
    "margin-top":"-10px"
  });

  var sence = new ScrollMagic.Scene({
    triggerElement: '.module-city-4-performance-hero h3'
  }).setTween(tween)
    // .addIndicators({
    //   name: "toggle text"
    // })
    .addTo(scrollMagicController);
});