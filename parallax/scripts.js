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

    if(wScroll > $('.clothes-pics').offset().top - $(window).height() / 1.4){
      $('.clothes-pics figure').each(function(i){

        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      })
    }
  });
});
