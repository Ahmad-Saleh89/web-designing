$(document).ready(function(){
  $('.OnOff').on('click', function(){
    $('#circle-button').toggleClass('clicked');
    $('.OnOff').toggleClass('toRed');
    $('.extended').toggleClass('triggered');
  });

  $('#send-btn').on('click', function(){
    $('#msg-content').addClass('sent');
    setTimeout(function(){
   $('#msg-content').addClass('appear').removeClass('sent');
 }, 1400);
  $('#msg-content').removeClass('appear');
  });
});
