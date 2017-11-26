$(document).ready(function(){
  var $slider = $('.slider-wrapper').find('.slider');
      counter = 1;
      var interval;

  function startSlider(){
    interval = setInterval(showUp, 7000);
  }
  function stopSlider(){
    clearInterval(interval);
  }
  startSlider();

  function showUp(){
    var $currentSlide = $slider.find('.showing');
    var $nextSlide = $currentSlide.next();

    if($nextSlide.length){
      $currentSlide.addClass('disappear');
      var sliderIndex = $nextSlide.index();
      var $sliderDot = $('.slider-wrapper').find('.slider-dots span').eq(sliderIndex);
      $sliderDot.addClass('is-active').prev().removeClass('is-active');
      setTimeout(function(){
        $currentSlide.removeClass('showing disappear');
        $nextSlide.addClass('showing');
      },1000);
      counter++;
    }else{
      // first remove class .is-active from all dots:
      $('.slider-dots span').removeClass('is-active');
      // and only add it to the first child:
      $('.slider-dots span:first').addClass('is-active');

      $slider.find('li:last').addClass('disappear');
      setTimeout(function(){
        $slider.find('li:first').addClass('showing');
        $slider.find('li:last').removeClass('disappear showing');
      },1000);
      counter =1;
    }
  }

  $('.slider-dots span').on('mouseenter', stopSlider).on('mouseleave', startSlider);
    // Clickable dots:
  $('.slider-dots span').click(function(){
    // first clear all dots from .is-active class:
    $('.slider-dots span').removeClass('is-active');
    // then only add it to the clicked dot:
    $(this).addClass('is-active');
    // then store the index of the clicked dot:
    var dotIndex = $('.is-active').index();
    // then clear all slides from .current class:
    $('.slider li').removeClass('showing');
    //  finally add .current to the matched slide:
    $('.slider li:nth-child('+(dotIndex+1)+')').addClass('showing');
  });
});
