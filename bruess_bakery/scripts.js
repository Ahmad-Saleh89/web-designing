$(document).ready(function(){
    // Scrolling animation effects:
    $(window).scroll(function(){
        // Window Scrolling position
        var scrollPos = $(this).scrollTop();
        
        // Shrink navbar when scrolling >> Only for wide screens
        winWidth = $(window).outerWidth();
        if(scrollPos > 100){
            if(winWidth > 991){
                $('.navbar').addClass('shrink-nav');
            }else {
                $('.navbar').removeClass('shrink-nav');
            }
        }else {
            $('.navbar').removeClass('shrink-nav');
        }

        // Flag01 animation
        var $flag1offset = $('#flag01').offset().top;
        if(scrollPos > $flag1offset - $(window).height()/1.2){
            $('#flag01').addClass('slide-up');
        }

        // Flag02 animation
        var $flag2offset = $('#flag02').offset().top;
        if(scrollPos > $flag2offset - $(window).height()/1.2){
            $('#flag02').addClass('slide-up');
        }

        // Flag03 animation
        var $flag3offset = $('#flag03').offset().top;
        if(scrollPos > $flag3offset - $(window).height()/1.2){
            $('#flag03').addClass('slide-up');
        }

        /*  Feature of the day Animation */
        var $featureOffset = $('#feature').offset().top;
        if(scrollPos > $featureOffset - $(window).height()/1.4){
            $('#feature-content').fadeIn(3000);
        }

        /*  Services Items Animation */
        // first item animation - slide left
        var $servItem01 = $('.service-item:first-child').offset().top;
        if(scrollPos > $servItem01 - $(window).height()/1.1){
        $('.service-item:first-child').addClass('slide-left');
       }
        // last item animation - slide right
       var $servItem03 = $('.service-item:last-child').offset().top;
       if(scrollPos > $servItem03 - $(window).height()/1.1){
       $('.service-item:last-child').addClass('slide-right');
      }

    });

});