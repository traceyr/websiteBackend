'use strict';
$(function() {
  $('#nav a').on('click', function() {
    $('#nav a.active').removeClass('active');
    $(this).addClass('active');
  });

  $(window).scroll(function(){
    let myIntroHeight = $('#my-intro').height();
    if ($(window).scrollTop() >= myIntroHeight) {
      $('#nav').addClass('fixed');
    }
    else {
      $('#nav').removeClass('fixed');
    }
  });

  $('#ham-menu').on('click', function() {
    let menu = $('#nav');
    menu.toggleClass('show-header');
  });
});
