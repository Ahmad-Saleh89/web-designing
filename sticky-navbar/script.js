$(document).ready(function(){
  var navOffset = $('.navbar').offset().top;
  console.log(navOffset);
  $(window).scroll(function(){
    var scrollPos = $(this).scrollTop();
    console.log(scrollPos);
    if(scrollPos > navOffset){
      $('.navbar').addClass('fixed-nav');
      $('header').css({'margin-bottom': '80px'});
    }else {
      $('.navbar').removeClass('fixed-nav');
      $('header').css({'margin-bottom': '0'});
    }
  });
});
