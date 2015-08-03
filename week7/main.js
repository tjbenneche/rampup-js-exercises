function alertDiameters(data){
  console.log(data.planets);
}

function listPlanets(data){
  for (var key in data.planets){
    var planet = key.toLowerCase();
    var distance = data.planets[key].distance;
    $('body').append('<div class="planet ' + planet + '" data-distance=' + distance +'></div>');
  }
}

$('#getPlanets').click(function(){
  $.ajax({
    method: 'GET',
    url: 'planets.json',
    dataType: 'json',
    success: function(data){
      listPlanets(data);
    }
  })
});

var mars = {
  "Mars": {
    "distance": 227940000,
    "diameter": 6800
  }
}

$('#addmars').click(function(){
  $.ajax({
    method: 'POST',
    url: '/planets_path',
    dataType: 'json',
    data: JSON.stringify(mars)  ,
    success: function(){
      console.log('success')
    },
    error: function(){
      console.log('error')
    }
  })
});
