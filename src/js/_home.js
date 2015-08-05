$(function() {
  // var cityTween = TweenMax.to('#home .city-text', 1.5, {
  //   opacity: 1
  // });
  var bottomOffset = app.getBreakpoint() == "xs" ? 20 : 80;
  var homeTween = new TimelineMax()
    .to('#home .background-image-city', 1.5, {
      opacity: 1
    }).to(
      '#home .background-image-text', 1, {
        opacity: 1,
        bottom: bottomOffset + 'px'
      }
    );
  var sence = new ScrollMagic.Scene({
      triggerElement: '#home #annimate-tigger'
    }).setTween(homeTween)
    // .addIndicators({
    //   name: "toggle home"
    // })
    .addTo(scrollMagicController);
});