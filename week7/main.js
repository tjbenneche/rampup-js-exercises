var sortable = [];

function sortByDistance(data){
  for (var planet in data.planets){
    var distance = data.planets[planet].distance;
    var name = planet.toLowerCase();
    sortable.push([name, distance]);
  }
  sortable.sort(function(a, b){ return a[1] - b[1]});
  printPlanets();
}

function sortBySize(data){
  for (var planet in data.planets){
    var diameter = data.planets[planet].diameter;
    var name = planet.toLowerCase();
    sortable.push([name, diameter]);
    sortable.sort(function(a, b){ return a[1] - b[1]});
  }
  printPlanets();
}

function dataFromPlanets(data) {
  for (var planet in data.planets){
    var distance = data.planets[planet].distance;
    var size = data.planets[planet].diameter;
    var speed = data.planets[planet].velocity;
    var name = planet.toLowerCase();
    sortable.push([name, distance, size, speed]);
  }
  sortable.sort(function(a, b){ return a[1] - b[1]});
  printPlanets();
}

function printPlanets(){
  for (var i = 0; i < sortable.length; i++){
    $('body').append('<div class="planet-container"><div class="planet ' + sortable[i][0] + '" data-distance=' + sortable[i][1] +' data-size =' + sortable[i][2] + ' data-speed=' + sortable[i][3] + '></div></div>');
  }
  sizePlanets();
}



$('#getPlanets').click(function(){
  $.ajax({
    method: 'GET',
    url: 'planets.json',
    dataType: 'json',
    success: function(data){
      dataFromPlanets(data);
    }
  })
});

function sizePlanets(){
  $.each($('.planet'), function(){
    if ($(this).hasClass('sun')){
      width = $(this).attr('data-size')/50000;
    }
    else{
      width = $(this).attr('data-size')/500;
    }
    $(this).css('width', width).css('height', width);
  })
  spacePlanets();
}

function spacePlanets(){
  $.each($('.planet-container'), function(){
    width = $(this).find('.planet').attr('data-distance')/1000000;
    $(this).css('width', width).css('height', width);
  });
  rotatePlanets();
}

function rotatePlanets(){
  $.each($('.planet-container'), function(){
    speed = $(this).find('.planet').attr('data-speed')*10 + 's';
    $(this).css({'-webkit-animation':'spinner', '-webkit-animation-duration': speed, '-webkit-animation-iteration-count':'infinite', '-webkit-animation-timing-function': 'linear'});
  });
}
