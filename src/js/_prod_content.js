$(function(){
  $('#page-nav').click(function(){
    $('#page-nav').toggleClass('active');
  });

  function _onClick(event) {
    //var clazzName = event.attr("class").split(" ")[0];
    $(".menu-list").clone().addClass("cloned").appendTo("body");
    $(".menu-list.cloned .close-icon").on("click", function() {
      _onClose();
    });
    $(".menu-list.cloned").fadeIn();
  }

  function _onClose(event) {
    $(".menu-list.cloned").fadeOut(400,function(){
      $(".menu-list.cloned").remove();
    });
  }

  function _BindClick(event) {
    $(".menu-list a").unbind().on("click", function(event) {
      event.preventDefault();
      var t = $(this);
      _onClick(t);
    });
  }
  app.getBreakpoint() === "xs" && _BindClick();
  $(window).on('resize', function() {
    app.getBreakpoint() === "xs" ? _BindClick() : $("a", wrapper).unbind();
  });
});