$(document).ready(function(){
  $('#next-btn, #back-btn').on('click', function(){
    $('#orient-content-1').toggleClass('clicked');
    $('#orient-content-2').toggleClass('clicked');
  });

});
