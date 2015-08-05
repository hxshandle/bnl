var scrollMagicController = new ScrollMagic.Controller();


var App = function(){};
App.prototype.mediaQueries = {
  xs: {
    min: 0,
    max: 767
  },
  sm: {
    min: 768,
    max: 991
  },
  md: {
    min: 992,
    max: 1199
  },
  lg: {
    min: 1200
  }
};

App.prototype.getBreakpoint = function() {
  var t = $(window).outerWidth();
  return t >= this.mediaQueries.xs.min && t <= this.mediaQueries.xs.max ? "xs" 
  : t >= this.mediaQueries.sm.min && t <= this.mediaQueries.sm.max ? "sm" 
  : t >= this.mediaQueries.md.min && t <= this.mediaQueries.md.max ? "md" 
  : t >= this.mediaQueries.lg.min ? "lg" : void 0
}


var app = new App();

// footer animate
if(app.getBreakpoint() !== "xs"){
  var tween = TweenMax.fromTo('.animated-footer', 1, {
    opacity: 0,
    "margin-top": "200px"
  }, {
    opacity: 1,
    "margin-top": "0px"
  });
  var sence = new ScrollMagic.Scene({
      triggerElement: '.animated-footer',
      offset:-300

    }).setTween(tween)
    //.addIndicators()
    .addTo(scrollMagicController);
}

// tabbar
$(function() {
  var root = $('.tabbar-container'),
    offsetTop = root.offset().top,
    wrapper = root.find('.tabbar-wrapper'),
    tabbar = root.find('.tabbar');

  $(window).scrollTop() >= offsetTop && wrapper.addClass("fixed");

  function _onClick(event) {
    var clazzName = event.attr("class").split(" ")[0];
    $(".tabbar-container").clone().addClass("cloned").addClass(clazzName).appendTo("body");
    $(".tabbar-container.cloned .close-icon").on("click", function() {
      _onClose();
    });
    $(".tabbar-container.cloned").fadeIn();
  }

  function _onClose(event) {
    
    $(".tabbar-container.cloned").fadeOut(400,function(){
      $(".tabbar-container.cloned").remove();
    });
  }

  function _BindClick(event) {
    $("a", wrapper).unbind().on("click", function(event) {
      event.preventDefault();
      var t = $(this);
      _onClick(t);
    });
  }
  app.getBreakpoint() === "xs" && _BindClick();
  $(window).on("scroll", function() {
    var st = $(window).scrollTop();

    st >= offsetTop ? wrapper.addClass("fixed") : wrapper.removeClass("fixed");
  });

  $(window).on('resize', function() {
    app.getBreakpoint() === "xs" ? _BindClick() : $("a", wrapper).unbind();
  });

});
$(function() {
  var progress_height = 92;
  var bikeStartLeft = 127;
  var bikeEndLeft = 278;
  //progress
  var _interval = setInterval(function() {
    progress_height--;
    if (progress_height < 0) {
      clearInterval(_interval);
      return;
    }
    $('#loading .light').css({
      height: progress_height + 'px'
    });
    var bikeLeft = bikeStartLeft +(bikeEndLeft-bikeStartLeft)*(1 - progress_height/92);
    $('#loading .bike').css({
      left: bikeLeft + 'px'
    });
    $('#loading .loading-percent').text(Math.floor((1 - progress_height/92)*100));
  }, 50);

});