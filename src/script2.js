/* Script for sliding to next slide */

$(function() { /* waits until page is loaded */

  /* Get all slides */
  var $slides = $(".slide");
  var $currentSlide = $slides.first();
  var $lastSlide;

  //#region Scrolling through slides with mousewheel

  /* Preparing Scrolling through slides with mousewheel */
  var $window = $(window);

  $window.on("mousewheel DOMMouseScroll", onMouseWheel); /* event listener to mousewheel scroll */

  function scrollUp(event){
      if(event.originalEvent.wheelDelta / 120 > 0){
          return true;
      } else {
          return false;
      }
  }

  function onMouseWheel(event){
      // differ if user scrolled up (previous slide) or down (next slide)
      var scrollUp;

      if(event.originalEvent.wheelDelta / 30 > 0){
          scrollUp = true;
      } else {
          scrollUp = false;
      }

      if(scrollUp){/* scrolledUp */
          console.log('scrolling up');
          goToPreviousSlide();
      } else {/* scrolledDown */
          console.log('scrolling down');
          goToNextSlide();
      }
  
  }
  //#endregion

  //#region jump to next slide when arrow is clicked
  $(".nextPageArrow").click(function(){
      goToNextSlide();
  });

  $(".prevPageArrow").click(function(){
      goToPreviousSlide();
  });

  $(".start").click(function(){
      goToNextSlide();
  })



  //#endregion 

  //#region change to next slide functions
  
  function goToPreviousSlide(){
      var previousSideExists = $currentSlide.prev().length;
      if(previousSideExists){
          $lastSlide = $currentSlide; /* save which was the last slide */
          $currentSlide = $currentSlide.prev(); /* set the next slide */
          $currentSlide.get(0).scrollIntoView(); /* Scroll to the next slide */
      }
  }

  function goToNextSlide(){
      var nextSlideExists = $currentSlide.next().length;
      if(nextSlideExists){
          $lastSlide = $currentSlide;
          $currentSlide = $currentSlide.next();
          $currentSlide.get(0).scrollIntoView();
      }
  }

  //#endregion

  //#region dealing with resize
  window.onresize = function(){
      $currentSlide.get(0).scrollIntoView();
  }

  window.onload = function(){
      $currentSlide.get(0).scrollIntoView();
  }
  //#endregion

  /* Hide "überspringen"-Button on last slide */
  $("#lastslide").mouseenter(function () {
      $("#btn").css('opacity', '0');
  });

  $("#lastslide").mouseleave(function () {
      $("#btn").css('opacity', '1');
  });
})

$(function() { /* waits until page is loaded */

  /* Get all slides */
  var $slides = $(".slide");
  var $currentSlide = $slides.first();
  var $lastSlide;

  //#region Scrolling through slides with mousewheel

  /* Preparing Scrolling through slides with mousewheel */
  var $window = $(window);

  $window.on("mousewheel DOMMouseScroll", onMouseWheel); /* event listener to mousewheel scroll */

  function scrollUp(event){
      if(event.originalEvent.wheelDelta / 120 > 0){
          return true;
      } else {
          return false;
      }
  }

  function onMouseWheel(event){
      // differ if user scrolled up (previous slide) or down (next slide)
      var scrollUp;

      if(event.originalEvent.wheelDelta / 30 > 0){
          scrollUp = true;
      } else {
          scrollUp = false;
      }

      if(scrollUp){/* scrolledUp */
          console.log('scrolling up');
          goToPreviousSlide();
      } else {/* scrolledDown */
          console.log('scrolling down');
          goToNextSlide();
      }
  
  }
  //#endregion

  //#region jump to next slide when arrow is clicked
  $(".nextPageArrow").click(function(){
      goToNextSlide();
  });

  $(".prevPageArrow").click(function(){
      goToPreviousSlide();
  });

  $(".start").click(function(){
      goToNextSlide();
  })



  //#endregion 

  //#region change to next slide functions
  
  function goToPreviousSlide(){
      var previousSideExists = $currentSlide.prev().length;
      if(previousSideExists){
          $lastSlide = $currentSlide; /* save which was the last slide */
          $currentSlide = $currentSlide.prev(); /* set the next slide */
          $currentSlide.get(0).scrollIntoView(); /* Scroll to the next slide */
      }
  }

  function goToNextSlide(){
      var nextSlideExists = $currentSlide.next().length;
      if(nextSlideExists){
          $lastSlide = $currentSlide;
          $currentSlide = $currentSlide.next();
          $currentSlide.get(0).scrollIntoView();
      }
  }

  //#endregion

  //#region dealing with resize
  window.onresize = function(){
      $currentSlide.get(0).scrollIntoView();
  }

  window.onload = function(){
      $currentSlide.get(0).scrollIntoView();
  }
  //#endregion

  /* Hide "überspringen"-Button on last slide */
  $("#lastslide").mouseenter(function () {
      $("#btn").css('opacity', '0');
  });

  $("#lastslide").mouseleave(function () {
      $("#btn").css('opacity', '1');
  });
})
