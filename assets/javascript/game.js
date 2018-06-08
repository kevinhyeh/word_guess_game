var words = ["USA", "Yemen", "Zimbabwe", "Canada", "Bangladesh", "Egypt", "Iraq", "Mexico", "Switzerland"];

var randomIndex = Math.floor(Math.random() * words.length);
var song = words[randomIndex];
// var dash = "-".repeat(song.length);

var letters = [];
var num = 15;
var numWins = 0;
// document.querySelector('.hidden').innerHTML = words[1];

document.querySelector(".counter").innerHTML = num;
document.querySelector(".wins").innerHTML = numWins;
document.querySelector(".hidden").innerHTML = song;


function hangman(e) {
    var key = e.key;
    // current word
    if (key == "r") {
        document.querySelector(".hidden").innerHTML = document.querySelector(".hidden").innerHTML.replace(randomIndex);
        console.log(randomIndex);
    }

    // number of wins
    document.querySelector(".wins").innerHTML = numWins++;

    // letters guessed
    letters.push(" " + key);

    document.querySelector(".guesses").innerHTML = letters;

    if (num == 0) {
        document.querySelector(".guesses").innerHTML = letters.splice(0, letters.length);
    }

    // number of guesses left
    document.querySelector(".counter").innerHTML = num--;
}

document.onkeypress = hangman;