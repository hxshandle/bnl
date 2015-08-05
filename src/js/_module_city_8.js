$(function() {
  var root = $('.module_city_8');


  var slickConfig = {
    infinite: true,
    slidesToShow: 1,
    prevArrow: ".time-line .fa-chevron-left",
    nextArrow: ".time-line .fa-chevron-right"
  };

  if (app.getBreakpoint() != "lg" && app.getBreakpoint() != "md") {
    slickConfig = {
      infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false
    }
    root.find('.time-line').slick(slickConfig);
    root.find('.time-line .pod').click(function() {
      root.find('.time-line').slick("slickNext");
    });
  } else {
    root.find('.time-line').slick(slickConfig);
    root.find('.time-line').on('afterChange', function(event, slick, currentSlide) {
      root.find('.year').removeClass('active').eq(currentSlide).addClass('active');
    });
    root.find('.fa-chevron-right').click(function() {
      root.find('.time-line').slick("slickNext");
    });
    root.find('.fa-chevron-left').click(function() {
      root.find('.time-line').slick("slickPrev");
    });
  }





  function _layout() {
    var timeLineYearWidth = 53;
    var yearCount = root.find('.year').length;
    var marginOffset = Math.floor((Math.floor(root.width() / yearCount) - timeLineYearWidth) / 2);
    root.find('.year').css({
      margin: "0 " + marginOffset + 'px'
    });

  }

  _layout();

  $(window).on('resize', _layout);

});