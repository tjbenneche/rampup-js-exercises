

/* FizzBuzz:
Brent is extremely particular about his outfits. Starting with the 1st day
of summer, he wears a yellow shirt every 3rd day and a pink shirt every
7th day. On conflicting days (i.e. days that are multiples of both 3 and 7),
he opts for his favorite blue tank instead.

1) Ask the user to input the day of summer as an integer, and store it in a
variable. Use a conditional to test for the various repsonses they could give,
and alert what Brent will be wearing that day. Keep in mind a user may not
input a number, and make sure your code is able to handle that with an
appropriate response!


2) Use a loop to calculate the number of times each summer Brent will wear
his yellow shirt, pink shirt, and blue tank. Store each in a variable and
alert them.
*/


var _day = prompt('How many days into the summer are we? Please provide an answer in the form of a number');

// check to see if _day is a multiple of 3 - % or modulo returns remainder, if 0 this expression evals to true
// check to see if _day is a multiple of both 3 and 7 - since they are prime, multiples will be of their product
if (!(_day % 21)){
  alert('Brent is wearing his blue tank today!');
}
else if (!(_day % 3)){
  alert('Brent is wearing his yellow shirt today!');
}
// check to see if _day is a multiple of 7
else if (!(_day % 7)){
  alert('Brent is wearing his pink shirt today!');
}
else if (isNaN(_day)){
  _day = prompt('That is not the type of answer we were looking for, try again!');
}
// if
else{
  alert('Brent is wearing whatever he fancies today!');
}



// Problem 2

var
