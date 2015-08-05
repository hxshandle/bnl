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