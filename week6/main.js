// stop propagation

$('div').click(function(e){
  e.stopPropagation();
  $(this).toggleClass('selected');
})

$('#ancestors').click(function(){
  $('.selected').parents().css('background-color', 'black');
});

$('#parent').click(function(){
  $('.selected').parent().css('background-color', 'white');
});


$('#reset').click(function(){
  window.location.reload();
});


$('#closest').click(function(){
  $('.selected').closest('.two').addClass('selected');
});

$('#children').click(function(){
  $('.selected').children().addClass('selected')
});
