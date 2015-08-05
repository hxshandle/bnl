$(function() {
  if (app.getBreakpoint() !== "xs") {
    $('.menu-list a').hover(function() {
      var el = $(this);
      el.text(el.data('zh'));
    }, function() {
      var el = $(this);
      el.text(el.data('en'));
    });
  }


  var tween = TweenMax.fromTo('.gallery', 1, {
    "margin-top": "200px",
    opacity: 0
  }, {
    "margin-top": "0px",
    opacity: 1
  });
});