$(document).ready(function(){
  $('button').on('click',function(){
    $('.resume').toggle();
    $('button').toggleClass('btn-warning');
    $('button').toggleClass('btn-info');

    if ($('.changable').text() == 'Please show') {
      $('.changable').text('Please hide');
    } else {
      $('.changable').text('Please show');
    }
  });

  $('button').on('mouseenter mouseleave',function(){

    if ($('.changable').text() == 'Please show') {
      $('button').toggleClass('btn-success');
      $('button').toggleClass('btn-info');
    } else {
      $('button').toggleClass('btn-danger');
      $('button').toggleClass('btn-warning');
    }

  });
});
