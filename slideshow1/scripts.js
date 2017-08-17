$(document).ready(function(){
  var $firstSlide = $('.slides li:nth-child(1)');
  var $lastSlide = $('.slides li:nth-child(5)');
  var $slider = $('.img-slider');
  var interval;

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

  function slideLeft(){
    var $currentSlide = $('.current');
    var $nextSlide = $currentSlide.next();

    if($nextSlide.length){
      $currentSlide.addClass('slide-current-left');
      $nextSlide.addClass('slide-left');
    }else{  // go back to the first slide:
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

  function slideRight(){
    var $currentSlide = $('.current');
    var $prevSlide = $currentSlide.prev();

    if($prevSlide.length){
      $currentSlide.addClass('slide-current-right');
      $prevSlide.addClass('slide-right');
    }else{ // go back to the last slide:
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
});

