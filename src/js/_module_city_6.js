$(function() {
  var root = $('.module-city-6');

  var tween = new TimelineMax().to('.module-city-6 h2', 0.5, {
    opacity: 1,
    "margin-top": "-20px"
  }).to('.module-city-6 p', 0.75, {
    opacity: 1,
    "margin-top": "-10px"
  });

  var sence = new ScrollMagic.Scene({
    triggerElement: '.module-city-6 h2'
  }).setTween(tween)
    .addIndicators()
    .addTo(scrollMagicController);
});