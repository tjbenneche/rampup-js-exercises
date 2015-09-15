// store .box in variable to reduce dom queries

var _boxes = $('.box');

function makeCircle(){
  $('.selected').addClass('circle');
}

function makeSquare(){
  console.log('make square fxn called');
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

_boxes.click(function(){
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
