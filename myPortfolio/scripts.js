$(document).ready(function(){
  // disappear nav list when click out:
  /* here I am using collapse plugin via bootstrap.
    review bootstrap 4 documentations */
  $('.navbar-toggler').blur(function(event){
    var screenWidth = window.innerWidth;
    if(screenWidth < 992){
      $('.collapse').collapse('hide');
    }
  });
  // smooth scrolling:
  var $scrollLink = $('.scroll');
  $scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      // scroll to the top of this hash #
      scrollTop: $(this.hash).offset().top
    }, 800);
  });

  // window scrolling effects:
  $(window).scroll(function(){
    var scrollPos = $(this).scrollTop();

    // nav-section offset variable:
    var navOffset = $('.nav-section').offset().top;
    // Header image height:
    var headerImgHeight = $('.header-img').outerHeight();
    // about-sign offset:
    var $aboutSignOffset = $('.about-sign').offset().top;
    // education section offset variable:
    var $eduOffset = $('.education').offset().top;
    // skills section offset variable:
    var $skillOffset = $('.skills').offset().top;
    // cirtificates section offset variable:
    var $cirtOffset = $('.cirtificates').offset().top;

    // sticky navbar effect:
    if(scrollPos > navOffset){
      $('.nav-section').addClass('fixed-nav');
      if(scrollPos > headerImgHeight){
        $('.nav-section').addClass('styled-nav');
      }else {
        $('.nav-section').removeClass('styled-nav');
      }
    }else {
      $('.nav-section').removeClass('fixed-nav');
    }

    // smooth scrolling: switching the active button:
    $scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top;
      if(scrollPos >= sectionOffset - 20){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });

    // about-sign animation:
    if(scrollPos > $aboutSignOffset - $(window).height() / 1.4){
      $('.about-sign img').css({'transform': 'rotateY(0)'});
    }

    // Slide in effect when scrolling (education section):
    // & fadeIn effect on #edu-intro p
    if(scrollPos > $eduOffset - $(window).height() / 2){
      $('#edu-intro p').fadeIn(4000);
      $('.education li').each(function(i){
        setTimeout(function(){
          $('.education li').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }

    // Show skill main big circle when scrolling:
    // & fadeIn effect on skills-intro p
    if(scrollPos > $skillOffset - $(window).height() / 2){
      $('#skills-intro p').each(function(i){
        setTimeout(function(){
          $('#skills-intro p').eq(i).fadeIn(1500);
        }, 200 * (i+1));
      });
      $('#inner-circle').addClass('show-cir');
    }

    // Fade in Cirtifications:
    if(scrollPos > $cirtOffset - $(window).height() / 2){
      $('.cirt-imgs figure').fadeIn(2000);
    }
  });

// Clickable skills items:
  var $corresTitle = $('#big-circle h3');
  var $corresPar = $('#big-circle').find('#circle-content');
  var $corresLogo = $('#big-circle').find('#circle-logo');
  $('.skills .skill-content').click(function(){
    $('.skill-content').removeClass('clicked-skill');
    $(this).addClass('clicked-skill');
    var skillTitle = $(this).find('h3').text();
    var aboutSkill = $(this).find('.about-skill').html();
    var logoSrc = $(this).find('.skill-logo').attr("src");
    $corresTitle.html(skillTitle);
    $corresPar.html(aboutSkill);
    $corresLogo.attr("src", logoSrc);
  });

// Certifications popup image:
  $('.cirt-imgs figure').click(function(){
    var $src = $(this).children().attr("src");
    $('.popup').fadeIn();
    $('.img-show img').attr("src", $src);
  });
  $('.img-show span, .overlay').click(function(){
    $('.popup').fadeOut();
  });

});
