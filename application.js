$(document).ready(function(){
  $('button').on('click',function(){
    $('.resume').toggle();
    $('button').toggleClass('btn-success');
    $('button').toggleClass('btn-danger');

    if ($('.changable').text() == 'Please show') {
      $('.changable').text('Please hide');
    } else {
      $('.changable').text('Please show');
    }
  });
});
