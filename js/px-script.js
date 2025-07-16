
;(function($){

 // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
    // Click TO Top

  if($(window).scrollTop() > 0){
    $('.toped').show();
  }
  else{
    $('.toped').hide();
  }


    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  



})(jQuery);