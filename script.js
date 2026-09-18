(function () {

  'use strict';


  /* =====================================================
     GOOGLE ANALYTICS
  ===================================================== */

  window.trackCheckout = function (location) {

    if (typeof window.gtag === 'function') {

      window.gtag(
        'event',
        'diagnostic_checkout_click',
        {
          link_location: location
        }
      );

    }

  };


  window.trackFitCall = function (location) {

    if (typeof window.gtag === 'function') {

      window.gtag(
        'event',
        'fit_call_click',
        {
          link_location: location
        }
      );

    }

  };


  /* =====================================================
     PAGE READY
  ===================================================== */

  document.addEventListener('DOMContentLoaded', function () {


    /* -------------------------------------------------
       SCROLL REVEALS

       Images stay the same.
       Sections/content gently enter as the visitor
       moves through the page.
    ------------------------------------------------- */

    const revealElements = document.querySelectorAll(
      '.not-alone-copy,' +
      '.testimonial-card,' +
      '.more-section h2,' +
      '.more-intro,' +
      '.benefit,' +
      '.process-section h2,' +
      '.process-subtitle,' +
      '.process-step,' +
      '.offer-title,' +
      '.offer-includes,' +
      '.offer-actions,' +
      '.closing-logo,' +
      '.closing-tagline,' +
      '.closing-icons'
    );


    revealElements.forEach(function (element, index) {

      element.classList.add('reveal-item');

      /*
       Small stagger so groups don't all appear
       at exactly the same millisecond.
      */

      element.style.setProperty(
        '--reveal-delay',
        ((index % 5) * 55) + 'ms'
      );

    });


    if ('IntersectionObserver' in window) {

      const revealObserver = new IntersectionObserver(

        function (entries, observer) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add('is-visible');

              observer.unobserve(entry.target);

            }

          });

        },

        {
          threshold: 0.12,
          rootMargin: '0px 0px -35px 0px'
        }

      );


      revealElements.forEach(function (element) {

        revealObserver.observe(element);

      });

    }

    else {

      revealElements.forEach(function (element) {

        element.classList.add('is-visible');

      });

    }


    /* -------------------------------------------------
       HEADER SCROLL STATE
    ------------------------------------------------- */

    const header = document.querySelector('.site-nav');

    function updateHeader() {

      if (!header) {
        return;
      }

      if (window.scrollY > 25) {

        header.classList.add('scrolled');

      }

      else {

        header.classList.remove('scrolled');

      }

    }

    updateHeader();

    window.addEventListener(
      'scroll',
      updateHeader,
      { passive: true }
    );


    /* -------------------------------------------------
       PERSONA CARDS

       The actual photos remain static assets.
       This only adds subtle web interaction.
    ------------------------------------------------- */

    const personas = document.querySelectorAll('.persona');

    personas.forEach(function (persona) {

      persona.setAttribute('tabindex', '0');

    });


    /* -------------------------------------------------
       PROCESS STEPS
    ------------------------------------------------- */

    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach(function (step) {

      step.setAttribute('tabindex', '0');

    });


    /* -------------------------------------------------
       RESPECT REDUCED MOTION
    ------------------------------------------------- */

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (reduceMotion.matches) {

      document.documentElement.classList.add('reduce-motion');

    }


  });


})();
