$(function() {
  var root = $('.module-city-3-summary-info');

  function doSlide() {
    if (app.getBreakpoint() !== "lg") {
      $(".row", root).slick({
        slide: ".slide",
        dots: !0,
        arrows: !1,
        accessibility: !0,
        infinite: !0,
        speed: 650,
        cssEase: "ease",
        slidesToShow: 1,
        draggable: !1
      });
      $(".row .slide", root).on("click", function() {
        $(".row", root).slick("slickNext");
      })
    }
  }

  var tween  = new TimelineMax()
  .staggerTo(".module-city-3-summary-info .title",.5,{
    "margin-left":"0px",
    opacity:1
  },.2);

  var sence = new ScrollMagic.Scene({
      triggerElement: '.module-city-3-summary-info .title'
    }).setTween(tween)
    //.addIndicators()
    .addTo(scrollMagicController);

  doSlide();

  $(window).on('resize', function() {
    if(app.getBreakpoint() == "lg"){
      $(".module-city-3-summary-info .row").slick('unslick');
    }else{
      doSlide();
    }
    
  });

});