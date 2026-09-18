(function(){

  'use strict';


  window.trackCheckout = function(location){

    if(typeof window.gtag === 'function'){

      window.gtag(
        'event',
        'diagnostic_checkout_click',
        {
          link_location: location
        }
      );

    }

  };


  window.trackFitCall = function(location){

    if(typeof window.gtag === 'function'){

      window.gtag(
        'event',
        'fit_call_click',
        {
          link_location: location
        }
      );

    }

  };


})();
