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
