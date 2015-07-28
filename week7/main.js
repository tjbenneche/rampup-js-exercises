function alertDiameters(data){
  console.log(data.planets);
}

$.ajax({
  method: 'GET',
  url: 'planets.json',
  dataType: 'json',
  success: function(data){
    alertDiameters(data);
  }
})

var mars = {
  "Mars": {
    "distance": 227940000,
    "diameter": 6800
  }
}

$('#addmars').click(function(){
  $.ajax({
    method: 'POST',
    url: 'planets.json',
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
