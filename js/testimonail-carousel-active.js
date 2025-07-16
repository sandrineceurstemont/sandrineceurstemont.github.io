(function ($) {
	"use strict";
    
     $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction("frontend/element_ready/pxportfolio_carousel.default", function (scope, $) {
       
            var pXtCar = $(scope).find(".px-testimonial-carousel");
            var xscarLoop = pXtCar.data('loop');
            var xscarDirection = pXtCar.data('direction');
            var xscarNumber = pXtCar.data('number');
            var xscarMargin = pXtCar.data('margin');
            var xscarSpeed = pXtCar.data('speed');
            var xscarAutoplay = pXtCar.data('autoplay');
            var xscarAutoDelay = pXtCar.data('auto-delay');
            var xscarGrabCursor = pXtCar.data('grab-cursor');
            var xscarEffects = pXtCar.data('effect');

          
            if(xscarAutoplay == 'yes'){
              var autoPlayData = {
                    delay: xscarAutoDelay,
                    disableOnInteraction: false,
                  };
            }else{
              var autoPlayData = false;
            }
if(xscarNumber > 1){
  var breakpointsValue = {
    768: {
      slidesPerView: 2,
      spaceBetween: xscarMargin,
    },
    991: {
      slidesPerView: xscarNumber,
      spaceBetween: xscarMargin,
    },
  }
}else{
  var breakpointsValue = {
    991: {
      slidesPerView: xscarNumber,
      spaceBetween: xscarMargin,
    },
  }
}
            
          
            


            var shopCarouselSwiper = new Swiper (pXtCar, {
                  // Optional parameters
                  direction: xscarDirection, // vertical
                  effect: xscarEffects, //"slide", "fade", "cube", "coverflow" or "flip"
                  slidesPerView: 1,
                  spaceBetween: 10,
                  loop: xscarLoop,
                  speed: xscarSpeed,
                  autoplay: autoPlayData,
                 // autoHeight: true,
                  grabCursor: xscarGrabCursor,
                  watchSlidesProgress: true,
                  watchSlidesVisibility: true,
                  breakpoints: breakpointsValue,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                })
                $( document ).ready(function() {
                    $('.px-testimonial-carousel .swiper-slide').removeClass('no-load');
                 });
            
        });
    })

  


}(jQuery));	


