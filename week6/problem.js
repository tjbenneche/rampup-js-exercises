
function colorChildren(elem) {
  // Use jQuery's children() function to add the class selected
  // to all children of the element passed in as a paramter

}

// On click of the element with id="color-children", call
// the colorChildren() function and pass in any selected elements


function alertParents(elem) {
  // Select the parent divs of the element passed in as a parameter,
  // and store in a variable

  // Create an empty string variable

  // Use a loop to iterate through the array returned from parents()
  // and add the className of each element in the array to the
  // empty list varible to create a comma-separated list of the parent
  // element's classes, i.e "four, five, six"
}

// On click of the element with id="alert-parents", call
// the alertParents() function and pass in any selected elements



function ancestorLevel(elem, num){
  // This function takes in two parameters: an element and a number.
  // Select the element's parents() and call jQuery's eq() function
  // on the array returned in order to access a specfic ancestor level
  // Since it is zero-based indexing, 0 would be direct parent, 1 would be
  // grandparent, etc.
}


// On click of the element with id="ancestor-level", prompt
// the user for a number, store it in a variable, and call the
// ancestorLevel function and pass in an element with class
// selected and the number


$('div').click(function(e){
  // stopPropagation() allows you to click on a child element
  // without triggering a click on all parent elements
  e.stopPropagation();
  $(this).toggleClass('selected');
})

// On click of the element with id="ancestors", change the background-color
// of all parents of selected element to black

// On click of the element with id="parent", change the background-color
// of direct parent of selected element to white


$('#reset').click(function(){
  // Refresh the page to restore to original state
  window.location.reload();
});


// On click of the element with id="closest", use jQuery's
// closest() function to add the class selected to the closest
// div to the selected element

// On click of the element with id="children", add the class
// selected to all children of the selected element


// On click of the element with id="siblings", add the class
// selected to all siblings of the selected element


// On click of the element with id="next", add the class selected
// to the next sibling of the selected element (this would be below in HTML)

// On click of the element with id="prev", add the class selected
// to the previous sibling of the selected element (this would be above in HTML)
