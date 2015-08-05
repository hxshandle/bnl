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