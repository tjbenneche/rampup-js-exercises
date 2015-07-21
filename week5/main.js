// store .box in variable to reduce dom queries
// explain color click function simplicity
// explain selected function

var _boxes = $('.box');

function makeCircle(){
  $('.selected').addClass('circle');
}

function makeSquare(){
  $('.selected').removeClass('circle');
}

function changeColor(color){
  $('.selected').addClass(color);
}

$('#circle').click(function(){
  makeCircle();
});

$('#square').click(function(){
  makeSquare();
});


$('.color').click(function(){
  _color = $(this).attr('data-color');
  changeColor(_color);
});

$('#toggle').click(function(){
  $('.selected').slideToggle();
});

$('.box').click(function(){
  $(this).toggleClass('selected');
});

$('#select-all').click(function(){
  _boxes.addClass('selected');
});

$('#deselect').click(function(){
  _boxes.removeClass('selected');
});

$('#reset').click(function(){
  _boxes.removeClass('circle selected').css('background-color', 'white');
});

$('#spin').click(function(){
  $('.selected').addClass('spin');
})
