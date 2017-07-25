$(document).ready(function(){
  $('.OnOff').on('click', function(){
    $('#circle-button').toggleClass('clicked');
    $('.OnOff').toggleClass('toRed');
    $('.extended').toggleClass('triggered');
  });
});
