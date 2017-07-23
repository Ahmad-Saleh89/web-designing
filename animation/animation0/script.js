$(document).ready(function(){
  $('#home-box').on('click', function(){
    $(this).toggleClass('clicked');
    $('#about-box').removeClass('clicked');
    $('#blog-box').removeClass('clicked');
  });

  $('#blog-box').on('click', function(){
    $(this).toggleClass('clicked');
    $('#about-box').removeClass('clicked');
    $('#home-box').removeClass('clicked');
  });

  $('#about-box').on('click', function(){
    $(this).toggleClass('clicked');
    $('#blog-box').removeClass('clicked');
    $('#home-box').removeClass('clicked');
  });
});
