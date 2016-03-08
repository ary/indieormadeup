var fakeNames = [
	"Petty Education",
	"Congress Freckle",
	"Franchise",
	"Breathe Faun",
	"Manly Pandas",
	"Monsoon",
	"Some Herd Trouble",
	"Seagull Sensor Drive",
	"Narcissus",
	"Binaural Dropout",
	"Chuck Tore",
	"Bran",
	"Minimax Bay Ewe",
	"Minimax Skunks",
	"Squirrel",
	"Rosemary Starve",
	"Pariah Amino"
 ];
 
var realNames = [
	"The Flatmates",
	"Another Sunny Day",
	"As Tall As Lions",
	"fun.",
	"Malcolm Middleton",
	"Shy Boys",
	"Fat Tulips",
	"Hello Saferide",
	"Times New Viking",
	"Broods",
	"Hannah Georgas",
	"Teenage Fanclub",
	"Great Lake Swimmers",
	"Summer Hymns",
	"Suburban Kids With Biblical Names",
	"An Horse"
];

// Return a random real bandname.
function getRealName() {
	return realNames[Math.floor(Math.random() * realNames.length)];
}

// Return a random fake bandname.
function getFakeName() {
	return fakeNames[Math.floor(Math.random() * fakeNames.length)];
}

// Return a random Boolean.
function randBool() {
    return (Math.floor(Math.random() * 2) == 0);
}


var leftBox = document.getElementById("left");
var rightBox = document.getElementById("right");

function showResult(id) {
	var resultField = document.getElementById("result").getElementsByTagName("h2")[0];
	if (id.isReal) {
		// This is a real band.
		var bandName = id.innerHTML;

		// Link to google search of band
		var a = document.createElement('a');
		var searchLink = "http://www.google.com/search?q=" + bandName; 
		a.setAttribute('href', searchLink);
		a.setAttribute('target', "_blank");
		a.innerHTML = bandName;

		console.log(a.innerHTML);
		console.log(1);
		// Set result text.
		resultField.innerHTML = 
			"Correct!! " +
			'<a href="'+searchLink+'" target="_blank">'+bandName+'</a>' + 
			" is an amazingly real indie band.";
	} else {
		resultField.innerHTML = "Wrong! That's ridiculous, who would ever name their band like that."
	}

	// Remove this handler from DOM.
	// id.target.removeEventListener(id.type, arguments.callee);
}

function showNext() {
	if (randBool()) {
		leftBox.isReal = true;
		leftBox.innerHTML = getRealName();
		rightBox.isReal = false;
		rightBox.innerHTML = getFakeName();
		
	} else {
		leftBox.isReal = false;
		leftBox.innerHTML = getFakeName();
		rightBox.isReal = true;
		rightBox.innerHTML = getRealName();
	}

	// Clear result text
	var resultField = document.getElementById("result").getElementsByTagName("h2")[0];
	resultField.innerHTML = "";
}

showNext();