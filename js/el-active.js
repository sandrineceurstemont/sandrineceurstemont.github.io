(function ($) {
	"use strict";
    
     $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction("frontend/element_ready/portfolixfilter.default", function (scope, $) {
       
            var pxFilter = $(scope).find(".xp-filter-items");
            var number = pxFilter.data('num');

            var mgfLoader = $(scope).find(".mgfilter-loader");
          //  var xscarLoop = mGpTCarousel.data('loop');

            const filterizr = $(pxFilter).filterizr({
                controlsSelector: '.fltr-controls'+number,
                gridItemsSelector: '.filtr-item'+number,
                spinner: {
                    enabled: true,
                },
                layout: 'sameWidth'
            });
          
          $("#shuffle").click(() => {
              filterizr.filterizr('shuffle');
          })
  
          const sortFilterizr = (order) => {
              filterizr.filterizr('sort',$("select :selected").val(), order);
  
          }
          $("#asc-btn").click(() => sortFilterizr('asc'));
          $("#des-btn").click(() => sortFilterizr('desc'));

          $(mgfLoader).hide();
          $(".pxm-filters button.pxfilter-menu").click(function () {
                $(".pxm-filters button.pxfilter-menu").removeClass("active");
                $(this).addClass("active");   
            });
          
            
        });
    })

  


}(jQuery));	
