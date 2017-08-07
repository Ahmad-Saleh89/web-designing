$(document).ready(function(){
  $('.icons li').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });

  $('.grid .item').click(function(){
    $('.alert-element').addClass('is-active');
    setTimeout(function(){
      $('.alert-element').removeClass('is-active');
    },3000);
  });

  $('.alerto i').click(function(){
    $('.modal-2-wrapper').addClass('is-rung');
    setTimeout(function(){
      $('.modal-2-wrapper').removeClass('is-rung');
    },5000);
  });
});
