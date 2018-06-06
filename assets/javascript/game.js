var anthem = ["United States Of America", "Yemen", "Zimbabwe", "Canada", "Bangladesh", "Egypt", "Iraq", "Mexico", "Switzerland"];

// document.querySelector('.hidden').innerHTML = anthem[1];

var randomIndex = Math.floor(Math.random()*anthem.length)
var song = anthem[randomIndex];
var dash = "-".repeat(song.length);

	document.querySelector(".hidden").innerHTML = dash;

// console.log(randomIndex);
