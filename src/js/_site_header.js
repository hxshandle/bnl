$(function() {
  $('#site-header .menu-icon,#heaer-nav-close').click(function(event) {
    event.preventDefault();
    $('#site-header .right-menu,.header-nav,#heaer-nav-close').toggleClass('active');
  });

  var _winHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= _winHeight) {
    $('#site-header').css({
      background: "#fff"
    });
  }
  var lastScroll = scrollTop;
  if (app.getBreakpoint() != "xs") {


    $(window).on("scroll", function() {
      var _winHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      if (scrollTop <= _winHeight) {
        var percent = scrollTop / _winHeight;
        $('#site-header').css({
          background: "rgba(255,255,255," + percent + ")",
        });
        $('.tabbar').css({
          "margin-top": "0px"
        });
      } else {
        $('#site-header').css({
          background: "#fff"
        });
        if (scrollTop > lastScroll) {
          //往下滚动
          $('#site-header').css({
            "margin-top": "-55px"
          });
          $('.tabbar').css({
            "margin-top": "0px"
          });
        } else {
          //往上滚动
          $('#site-header').css({
            "margin-top": "0px"
          });
          $('.tabbar').css({
            "margin-top": "55px"
          });
        }
        lastScroll = scrollTop;
      }
    });
  }
});