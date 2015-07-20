// stop propagation

$('div').click(function(e){
  e.stopPropagation();
  $(this).toggleClass('selected');
})

$('#ancestors').click(function(){
  $(this).parents().css('border-color', 'red');
});
