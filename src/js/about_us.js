$(function() {
  var root = $('.about-content');


  $('.time-line .prev,.time-line .next').click(function() {
    var forWard = $(this).hasClass('prev') ? "slickPrev" : "slickNext";
    root.find('.time-line-sliders').slick(forWard);
  });

  $('.pod').each(function(index, element) {
    var el = $(element);
    var dom = $("<span class='cycle-point'></span>").data('year', el.data('year'));
    $('<span class="year">').text(el.data('year')).appendTo(dom);
    dom.attr('id', "year-" + el.data('year'));
    if (index == 0) {
      dom.addClass('active');
    }
    dom.appendTo('.time-line');
  });

  // 原点布局
  var winWidth = $(window).width();
  var startPoint = 150;
  var endPoint = 150;
  var pointCount = $('.pod').length;
  var placeWidth = winWidth - startPoint - endPoint;
  var marginOffset = Math.floor((Math.floor(placeWidth / pointCount) - 8) / 2);
  $('.cycle-point').css({
    margin: "0 " + marginOffset + 'px'
  });
  $('.cycle-point:eq(0)').css({
    "margin-left": (marginOffset + 130) + 'px'
  });

  var cfg = {
    infinite: true,
    slidesToShow: 1,
    prevArrow: ".time-line .prevt",
    nextArrow: ".time-line .next"
  };

  if (app.getBreakpoint() != "lg" && app.getBreakpoint() != "md") {
    cfg = {
      infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false
    }
  }
  root.find('.time-line-sliders').slick(cfg);
  root.find('.time-line-sliders').on('afterChange', function(event, slick, currentSlide) {
    root.find('.cycle-point').removeClass('active').eq(currentSlide).addClass('active');
  });

  $('.pod-nav').click(function() {
    var el = $(this);
    if (el.hasClass('active')) {
      return;
    }
    $('.pod-nav.active').removeClass('active');
    $(this).addClass('active');
    var _target = el.data('ref');
    $('#pod-news-image').attr('src',el.data('src'));
    $('.news-pod.active').fadeOut(function() {
      $('.news-pod.active').removeClass('active');
      $(_target).fadeIn().addClass('active');
    });
  });


  //动画效果
  var tween = new TimelineMax()
    .to('.animate-1', 1, {
      opacity: 1,
      "margin-top": "0px"
    })
    .to('.animate-2', 1, {
      opacity: 1,
      "margin-top": "0px"
    })
    .to('.animate-3', 1, {
      opacity: 1,
      "margin-top": "0px"
    });

  var tween2 = TweenMax.to(".animate-4", 1, {
    opacity: 1,
    "margin-top": "0px"
  });
  var sence = new ScrollMagic.Scene({
      triggerElement: '.animate-4'
    }).setTween(tween2)
    .addIndicators()
    .addTo(scrollMagicController);
});