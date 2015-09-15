// stop propagation
function colorChildren(elem) {
  $(elem).children('div').addClass('selected');
}
$('#color-children').click(function(){
  colorChildren($('.selected'));
});


function alertParents(elem) {
  var arr = $(elem).parents('div');
  var list = '';
  for (var i = 0; i < arr.length; i++){
    list += arr[i].className + ', ';
    console.log(list);
  }
}
$('#alert-parents').click(function(){
  alertParents($('.selected'));
});


function ancestorLevel(elem, num){
  $(elem).parents().eq(num).addClass('selected');
}
$('#ancestor-level').click(function(){
  var num = prompt('How far up the chain? 0 is direct parent');
  ancestorLevel($('.selected'), num);
})

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


$('#siblings').click(function(){
  $('.selected').siblings('div').addClass('selected');
});

$('#next').click(function(){
  $('.selected').next('div').addClass('selected');
});

$('#prev').click(function(){
  $('.selected').prev('div').addClass('selected');
});
