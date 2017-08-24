$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({
      'transform' : 'translateY('+wScroll/2+'%)'
    });

    $('.back-bird').css({
      'transform' : 'translateY('+wScroll/4+'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translateY(-'+wScroll/30+'%)'
    });
  });
});
