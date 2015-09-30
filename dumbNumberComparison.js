var x = prompt('value for x');
var y = prompt('value for y');

var numX;
var numY;

if (parseInt(x) != NaN) {
	numX = parseInt(x);
} else {
	numX = x;
}

if (parseInt(y) != NaN) {
	numY = parseInt(y);
} else {
	numY = y;
}


function validateNumbers(a, b) {
	if (a and b are both numbers){
		return true
	}
	else {
		return false
	}
}




if (numX > y) {
	console.log(numX + ' is greater than ' + y);
} else if (numX < y) {
	console.log(numX + ' is less than ' + y);
} else if (validateNumbers(x,y)){
	console.log('one of those is not a number');
}
 else {
	console.log(x + ' is equal to ' + y);
}
