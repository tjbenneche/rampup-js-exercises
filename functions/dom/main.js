//js doc

var _divs = document.getElementsByTagName('div');
//console.log(_divs);

var _paragraphs = document.getElementsByTagName('p');
//console.log(_paragraphs);

var _labels = document.getElementsByClassName('label');
//console.log(_labels)


var _box1 = document.getElementById('box1');
console.log(_box1);


// function alertText(){
// 	alert(this.innerHTML);
// }


// for (var i = 0; i < _divs.length; i++){
// 	_divs[i].addEventListener('click', alertText);
// }


function makeCircle(){
	for (var i = 0; i < _divs.length; i++){
		_divs[i].style.borderRadius = '50%';	
	}
}

function hide(){
	for (var i = 0; i < _divs.length; i++){
		_divs[i].style.display = 'none';	
	}
}

function show(){
	for (var i = 0; i < _divs.length; id++){
		_divs[i].style.display = 'block';
		_divs[i].addClass('div', 'shown');	
	}
}

function toggle(){
	if (_divs[i].className == "shown ") {

	}
	else{

	}
}

function addClass(tag, newClass){
    var elems = document.getElementsByTagName(tag);
    for(var i = 0; i < elems.length; i++){
        elems[i].className = elems[i].className + " " + newClass;
    }
}


function removeClass(tag, classToRemove){
    var elems = document.getElementsByTagName(tag);
    for(var i = 0; i < elems.length; i++){
        elems[i].className = elems[i].className.replace(new RegExp('(?:^|s)' + classToRemove + '(?!S)'), '');
    }
}

function toggleClass



document.getElementById('toggle').addEventListener('click', toggle);


document.getElementById('circle').addEventListener('click', makeCircle);

document.getElementById('hide').addEventListener('click', hide);





