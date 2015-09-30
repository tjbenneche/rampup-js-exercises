// This is an empty array that we will insert data into after the AJAX request is complete
var sortable = [];

function dataFromPlanets(data) {
  // Write a for loop to iterate through each planet in the dataset
  // Set each property on each planet object to a variable - one for name, distance, size, and time elapsed per revolution (revTime)
  // Push these properties into the sortable array as a collection of nested arryas - i.e. sortable should look like [['earth', 1234, 123, 1], ['venus', 2345, 234, 5]...]
  // Sort the array using jQuery's sort() method - hint: look up bubble sort algorithm javascript, or array sort javascript. You can sort by distance, size, or revTime using a simple algorithm
  // Call the printPlanets() function to insert these objects onto the page as DOM elements
}

function printPlanets(){
  // Loops through each element in the sortable array, inserts a div for each planet, with data-attributes to store each property on the object. The parent-container div is just a wrapper for styling purposes
  for (var i = 0; i < sortable.length; i++){
    $('body').append('<div class="planet-container"><div class="planet ' + sortable[i][0] + '" data-distance=' + sortable[i][1] +' data-size =' + sortable[i][2] + ' data-rev=' + sortable[i][3] + '></div></div>');
  }
  //sizePlanets();
}



$('#getPlanets').click(function(){
  // On click of the getPlanets button, fire off an AJAX GET request
  // The method (or type) is GET
  // The url is the path to the data (in this case just planets.json)
  // The datatype is json
  // Using the success property, fire off a callback function with the parameter (data) that calls the dataFromPlanets function and passes in that data
});

function sizePlanets(){
  // Loop through each element with class 'planet' using jQuery's each() function
  // Grab its data-size attribute and use .css() to set the planets width and height to that number divided by 500 (for visibilty)
  // Call the spacePlanets() function to spread them out
}

function spacePlanets(){
  // Loop through each element with class 'planet' using jQuery's each() function
  // Grab its data-size attribute and use .css() to set the planet container's width  to that number divided by 1000000 (for visibilty) - planet container is used to space them out and eventually to rotate
  // Call rotatePlanets() to have them orbit the sun
}

function rotatePlanets(){
  $.each($('.planet-container'), function(){
    revTime = $(this).find('.planet').attr('data-rev')*10 + 's';
    $(this).css({'-webkit-animation':'spinner', '-webkit-animation-duration': revTime, '-webkit-animation-iteration-count':'infinite', '-webkit-animation-timing-function': 'linear'});
  });
}
