$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
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
      });
    }

    if(wScroll > $('.lg-window').offset().top - $(window).height()){
      $('.lg-window').css({
        'background-position':'center '+ (wScroll - $('.lg-window').offset().top) +'px'
      });

      var opacity = (wScroll - $('.lg-window').offset().top +400)/ (wScroll/5);
      $('.window-tint').css('opacity', opacity);
    }

    var jaOffset =Math.min(0, wScroll - $('.leather-jackets').offset().top + 200);
    console.log(jaOffset);
    if(wScroll > $('.leather-jackets').offset().top - $(window).height()){
      $('#jacket-1').css({'transform': 'translate('+jaOffset+'px, '+Math.abs(jaOffset * 0.2)+'px)'});
      $('#jacket-3').css({'transform': 'translate('+Math.abs(jaOffset)+'px, '+Math.abs(jaOffset * 0.2)+'px)'});
    };
  });

  $('.read-more-trigger').click(function(){
    $(this).parents().toggleClass(' clicked');
  });
});
