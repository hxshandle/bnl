$(function() {

  if (app.getBreakpoint() != "xs") {
    var tween = TweenMax.fromTo('.animate-1', 1, {
      opacity: 0,
      "margin-top": "200px"
    }, {
      opacity: 1,
      "margin-top": "0px"
    });
  }


});