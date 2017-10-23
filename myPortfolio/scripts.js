$(document).ready(function(){
  /*
  // Slider:
  var $slider = $('.slider-wrapper').find('.slider');
    counter = 1;
    var interval;

  function startSlider(){
    interval = setInterval(showUp, 10000);
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
      },1100);
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
    // then clear all slides from .showing class:
    $('.slider li').removeClass('showing');
    //  finally add .showing to the matched slide:
    $('.slider li:nth-child('+(dotIndex+1)+')').addClass('showing');
  });
  */

  // nav-section offset variable:
  var navOffset = $('.nav-section').offset().top;
  // education section offset variable:
  var $eduOffset = $('.education').offset().top;

  // window scrolling effects:
  $(window).scroll(function(){
    var scrollPos = $(this).scrollTop();
    // sticky navbar effect:
    if(scrollPos > navOffset){
      $('.nav-section').addClass('fixed-nav');
      $('header').css({'margin-bottom': '50px'});
      $('.navbar').css({'height': '50px'});
    }else {
      $('.nav-section').removeClass('fixed-nav');
      $('.navbar').css({'height': '100px'});
      $('header').css({'margin-bottom': '0'});
    }

    // Slide in effect when scrolling (education section):
    if(scrollPos > $eduOffset - $(window).height() / 1.4){
      $('.education li').each(function(i){
        setTimeout(function(){
          $('.education li').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }

  });


  var $corresTitle = $('.corresponded-win h3');
  var $corresPar = $('.corresponded-win div');
  $('.skills li').click(function(){
    var liTitle = $(this).find('h3').text();
    var liPar = $(this).find('.about-skill').text();
    $corresTitle.html(liTitle);
    $corresPar.html(liPar);
  });



  /*
  parallax effect
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    if (wScroll > $('.parallax-bg').offset().top - $(window).height()/2) {
      $('.parallax-img').css({
        'transform': 'translateY('+wScroll/40+'%)'
      });
    }
  });
  */
});
