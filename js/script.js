/* Author: Madeck

*/

var PI = Math.PI;

var r;
var g;
var b;

var fps = 1000/30;

var psychoIncrement = 36;
var increment = smoothIncrement = 1;
var readyForIncrementChange = true;
var speed = 'slower';
var frequency = 0.03;
var frequencyR = frequency; // red frequency
var frequencyG = frequency;	// green frequency
var frequencyB = frequency; // blue frequency
var i = Math.random()*2*PI;

// == Functions By @jbum (http://i234.ca/HZKGJH) == //

function RGB2Color(r,g,b) {
	// return 'rgb('+r+','+g+','+b+')';
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n) {
	var nybHexString = "0123456789ABCDEF";
	return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function cycleColors() {

	// console.log('cycling colors…');

	// increment i
	i += increment;

	// define rgb values
	r = Math.sin(frequencyR*i + 0) * 80 + 120;
	g = Math.sin(frequencyG*i + 2) * 80 + 130;
	b = Math.sin(frequencyB*i + 4) * 80 + 140;

	bgColor = RGB2Color(r,g,b);

	$('img#logo').css('background-color', bgColor);

	setTimeout("cycleColors()", fps);
}


// == Code to execute == //

cycleColors();

$('#logo').delay(600).animate({
	opacity: 1,
	marginTop: '+=30'
	},
	1200,
	function() {
    	// Animation complete.
	}
);

$('h1').delay(2400).animate({
	opacity: 1
	},
	1200,
	function() {
    	// Animation complete.
	}
);

$('a').delay(4800).animate({
	opacity: 1
	},
	1200,
	function() {
    	// Animation complete.
	}
);

/*
	== Key Codes ==

	32 : space
	37 : left arrow
	39 : right arrow

*/

$(document).keydown( function(k) {
	// k.preventDefault()

	if(k.keyCode == 32) {
		if(readyForIncrementChange) speed = 'faster';
		readyForIncrementChange = false;
	}
});

$(document).keyup( function(k) {
	// k.preventDefault();

	if(k.keyCode == 32) {
		console.log('space key up!');
		speed = 'slower';
		readyForIncrementChange = true;
	}
});

/*
while(slowDown) {
	increment = (increment+(smoothIncrement*2))/3;
}
*/

changeIncrement()
function changeIncrement() {

	// console.log('changeIncrement() called with speed set to ' + speed + '.');

	if(speed == 'slower') {
		if(increment == smoothIncrement) console.log('increment = smoothIncrement');
		else {
			increment = Math.floor(((increment*1)+(smoothIncrement*2))/3);
		} 
	}

	else if(speed == 'faster') {
		if(increment == psychoIncrement) console.log('increment = psychoIncrement');
		else {
			increment = Math.ceil(((increment*4)+(psychoIncrement*1))/5);
		}
	}

	setTimeout("changeIncrement()", 100);
}

