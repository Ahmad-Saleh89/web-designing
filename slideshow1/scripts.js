$(document).ready(function(){
  var $firstSlide = $('.slides li:nth-child(1)');
  var $lastSlide = $('.slides li:nth-child(5)');

  $('.next-icon').click(function(){
    var $currentSlide = $('.current');
    var $nextSlide = $currentSlide.next();

    if($nextSlide.length){
      $currentSlide.addClass('slide-current-left');
      $nextSlide.addClass('slide-left');
    }else{
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
  });

  $('.prev-icon').click(function(){
    var $currentSlide = $('.current');
    var $prevSlide = $currentSlide.prev();

    if($prevSlide.length){
      $currentSlide.addClass('slide-current-right');
      $prevSlide.addClass('slide-right');
    }else{
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
  });
});
