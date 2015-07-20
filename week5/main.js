// store .box in variable to reduce dom queries
// explain color click function simplicity
// explain selected function


function makeCircle(){
  $('.selected').addClass('circle');
}

function makeSquare(){
  $('.selected').removeClass('circle');
}

function changeColor(color){
  $('.selected').css('background-color', color);
}

$('#circle').click(function(){
  makeCircle();
});

$('#square').click(function(){
  makeSquare();
});

$('.color').click(function(){
  _color = $(this).attr('id');
  changeColor(_color);
});

$('#toggle').click(function(){
  $('.selected').slideToggle();
});

$('.box').click(function(){
  $(this).toggleClass('selected');
});

$('#select-all').click(function(){
  $('.box').addClass('selected');
});

$('#deselect').click(function(){
  $('.box').removeClass('selected');
});

$('#reset').click(function(){
  $('.box').removeClass('circle selected').css('background-color', 'white');
});

$('#spin').click(function(){
  $('.selected').addClass('spin');
})
