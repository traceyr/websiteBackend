$(function() {
  $('#nav a').on('click', function(e) {
    e.preventDefault();
    $('#nav a.active').removeClass('active');
    $(this).addClass('active');
    console.log('did it work');
  });

});
