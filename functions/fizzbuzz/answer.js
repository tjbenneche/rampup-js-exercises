var _dayOfSummer = prompt("Input the Day of the Summer");
var _yellowShirt = 0;
var _pinkShirt = 0;
var _blueTank = 0;
var _unknownTop = 0;
var _keepLooping = true;

while (_keepLooping) {
    if ((_dayOfSummer > 0) && (_dayOfSummer < 365)) {
        if ((_dayOfSummer % 21) === 0) {
			alert("Brent will be wearing a Blue Tank on that day");
		}
		else if ((_dayOfSummer % 3) === 0) {
			alert("Brent will be wearing a Yellow Shirt on that day");
		}
		else if ((_dayOfSummer % 7) === 0) {
			alert("Brent will be wearing a Pink Shirt on that day");
		}
		else {
			alert("We do not know what Brent will be wearing that day");
		}
        _keepLooping = false;
	}
    else if ((_dayOfSummer < 0) || (_dayOfSummer > 365)){
        alert("You must enter an Integer greater than 0 and less than 365");
		_dayOfSummer = prompt("Input the Day of the Summer");
    }
	else {
		alert("Sorry, you did not enter an Integer for the Day of the Summer");
		_dayOfSummer = prompt("Input the Day of the Summer");
	}
}

for (var i=1; i <= 95; i++) {
		if ((i % 21) === 0) {
			_blueTank++;
		}
		else if ((i % 3) === 0) {
			_yellowShirt++;
		}
		else if ((i % 7) === 0) {
			_pinkShirt++;
		}
		else {
			_unknownTop++;
		}

}

alert("Brent wore a Yellow Shirt " + _yellowShirt + " times this summer.")
alert("Brent wore a Pink Shirt " + _pinkShirt + " times this summer.")
alert("Brent wore a Blue Tank " + _blueTank + " times this summer.")
alert("Brent wore an Unknown Top " + _unknownTop + " times this summer.")
