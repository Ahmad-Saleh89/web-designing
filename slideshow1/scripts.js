$(document).ready(function(){
  var $firstSlide = $('.slides li:first'),
      $lastSlide = $('.slides li:last'),
      $slider = $('.img-slider'),
      interval;

  function startSlider(){
    interval = setInterval(slideLeft ,5000);
  }
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  // Start the slider when the page is loaded:
  startSlider();

  // Next & Prev buttons functionality:
  $('.next-icon').click(slideLeft);
  $('.prev-icon').click(slideRight);

  // Slide left function:
  function slideLeft(){
    var $currentSlide = $('.current');
    var $nextSlide = $currentSlide.next();

    if($nextSlide.length){
      var slideIndex = $nextSlide.index();
      var $sliderDots = $slider.find('.slider-dots span').eq(slideIndex);
      $currentSlide.addClass('slide-current-left');
      $nextSlide.addClass('slide-left');
      $sliderDots.addClass('is-active').prev().removeClass('is-active');

    }else{  // go back to the first slide:
      // 1- Dots changes:
      // first remove class .is-active from all dots:
      $('.slider-dots span').removeClass('is-active');
      // and only add it to the first child:
      $('.slider-dots span:first').addClass('is-active');
      // 2- slides changes:
      $currentSlide.removeClass('current').addClass('slide-current-left');
      $firstSlide.addClass('slide-left current');

      setTimeout(function(){
        $firstSlide.removeClass('slide-left');
      },1000);
    }
    setTimeout(function(){
      $currentSlide.removeClass('current slide-current-left');
      $nextSlide.addClass('current').removeClass('slide-left');
    },1000);
  }

  //  Slide right function:
  function slideRight(){
    var $currentSlide = $('.current');
    var $prevSlide = $currentSlide.prev();

    if($prevSlide.length){
      var slideIndex = $prevSlide.index();
      var $sliderDots = $slider.find('.slider-dots span').eq(slideIndex);
      $sliderDots.addClass('is-active').next().removeClass('is-active');

      $currentSlide.addClass('slide-current-right');
      $prevSlide.addClass('slide-right');
    }else{ // go back to the last slide:
      // Dots changes:
      // first remove class .is-active from all dots:
      $('.slider-dots span').removeClass('is-active');
      // and only add it to the last child:
      $('.slider-dots span:last').addClass('is-active');
      // Slides changes:
      $currentSlide.removeClass('current').addClass('slide-current-right');
      $lastSlide.addClass('slide-right current');

      setTimeout(function(){
        $lastSlide.removeClass('slide-right');
      },1000);
    }
    setTimeout(function(){
      $currentSlide.removeClass('current slide-current-right');
      $prevSlide.addClass('current').removeClass('slide-right');
    },1000);
  }

  // Clickable dots:
  $('.slider-dots span').click(function(){
    // first clear all dots from .is-active class:
    $('.slider-dots span').removeClass('is-active');
    // then only add it to the clicked dot:
    $(this).addClass('is-active');
    // then store the index of the clicked dot:
    var dotIndex = $('.is-active').index();
    // then clear all slides from .current class:
    $('.slides li').removeClass('current');
    //  finally add .current to the matched slide:
    $('.slides li:nth-child('+(dotIndex+1)+')').addClass('current');
  });
});


