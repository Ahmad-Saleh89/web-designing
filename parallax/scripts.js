$(document).ready(function(){
  // smooth scrolling:
  var $scrollLink = $('.scroll');
  $scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      // scroll to the top of this hash #
      scrollTop: $(this.hash).offset().top
    }, 700);
  });
  // for sticky navbar:
  var navbarOffset = $('.navbar').offset().top;
  console.log(navbarOffset);

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    // Header and Logo:
    $('.logo').css({
      'transform' : 'translateY('+wScroll/2+'%)'
    });

    $('.back-bird').css({
      'transform' : 'translateY('+wScroll/4+'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translateY(-'+wScroll/30+'%)'
    });

    // smooth scrolling: switching the active button:
    $scrollLink.each(function(){
      var articleOffset = $(this.hash).offset().top;
      if(wScroll >= articleOffset){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });

    // Sticky navbar:
    if(wScroll > navbarOffset){
      $('.navbar').addClass('fixed-nav');
      $('header').css('margin-bottom','68px');
    }else {
      $('.navbar').removeClass('fixed-nav');
      $('header').css('margin-bottom','0');
    }

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
