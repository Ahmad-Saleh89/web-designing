$(document).ready(function(){
    $('.btn').click(function(){
    var $btn = $(this),
        $step = $btn.parents('.modal-wrapper'),
        stepIndex = $step.index(),
        $pag = $('.form-header span').eq(stepIndex);
    if(stepIndex === 0 || stepIndex === 1) { step1($step, $pag); }
    else { step3($step, $pag); }
  });


  function step1($step, $pag){
  console.log('step1');
    // animate the step out
    $step.addClass('animate-out');

    // animate the step in
    setTimeout(function(){
      $step.removeClass('animate-out is-showing')
           .next().css('transform-origin', 'top')
           .addClass('animate-in is-showing');
      $pag.removeClass('is-active')
            .next().addClass('is-active');
    }, 600);

    // after the animation, adjust the classes
    setTimeout(function(){
      $step.next().removeClass('animate-in')
                  .css('transform-origin', 'bottom');

    }, 1200);
  }


  function step3($step, $pag){
  console.log('3');

    // animate the step out
    $step.parents('.form-container').addClass('animate-up');

    setTimeout(function(){
      $('.rerun-btn').css('display', 'inline-block');
    }, 300);
  }

  $('.rerun-btn').click(function(){
   $('.form-container').removeClass('animate-up')
                    .find('.modal-wrapper')
                    .first().addClass('is-showing')
                    .siblings().removeClass('is-showing');

    $('.form-header span').first().addClass('is-active')
                            .siblings().removeClass('is-active');
   $(this).hide();
  });

});
