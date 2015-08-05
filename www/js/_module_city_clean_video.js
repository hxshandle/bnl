$(function() {

  function videoTemplate(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(src) {
      buf.push('<div class="video-modal"><a href="#" class="close-video-modal"><i class="fa fa-times"></i></a><div class="container"><div class="row vertical-center-simple"><div class="col-sm-10 col-sm-offset-1 video-container embed-responsive embed-responsive-16by9"><iframe id="faster-clean-video"' + jade.attr("src", "" + src + "", true, false) + ' allowfullscreen="" frameborder="0" width="972" height="547" class="embed-responsive-item"></iframe></div></div></div></div>');
    }).call(this, "src" in locals_for_with ? locals_for_with.src : typeof src !== "undefined" ? src : undefined);
    return buf.join("");
  }

  var root = $('.module-city-2-clean-video');
  root.find('a').click(function(event) {
    var el = $(this);
    event.preventDefault();
    var _videoHtml = videoTemplate({
      src: el.data('video-src')
    });
    var videoPanel = $(_videoHtml);
    videoPanel.appendTo(document.body);
    videoPanel.find('.fa-times').click(function(event) {
      event.preventDefault();
      $('.video-modal').fadeOut(function() {
        $('.video-modal').remove();
      });
    });
    videoPanel.fadeIn();
  });

  //animate
  //
  var tl = new TimelineMax();

  tl.fromTo('.module-city-2-clean-video h2',1,{
    opacity:0,
    "top":"80%"
  },{
    opacity:1,
    "top":"50%"
  })
  .fromTo(".module-city-2-clean-video .heroPlayBtn",.5,{
    opacity:0
  },{
    opacity:1
  });
  var sence = new ScrollMagic.Scene({
      triggerElement: '.module-city-2-clean-video h2',
      offset:-300
    }).setTween(tl)
    .addIndicators()
    .addTo(scrollMagicController);
});