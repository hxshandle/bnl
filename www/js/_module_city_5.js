$(function() {
  var root = $('.module-city-5');

  var tween = new TimelineMax().to('.module-city-5 h2', 0.5, {
    opacity: 1,
    "margin-top": "-20px"
  }).to('.module-city-5 p', 0.75, {
    opacity: 1,
    "margin-top": "-10px"
  });

  var sence = new ScrollMagic.Scene({
    triggerElement: '.module-city-5 h2'
  }).setTween(tween)
    //.addIndicators()
    .addTo(scrollMagicController);
});