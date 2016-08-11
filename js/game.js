$(function(){
$('#success').hide();
$('#startover').add('hoverOut');
  var score = 0;
  $('#image').click(function(){
    score++;
    $('#score').text(score);

    $('#success').show('slow').fadeOut(2000);
  });

  $('#startover').hover(function(){
    score = 0;
  $('#score').text(score);
  $('#startover').addClass('hoverIn').remove('hoverOut');
  },function(){
  $('#startover').removeClass('hoverIn').addClass('hoverOut');
});

});
