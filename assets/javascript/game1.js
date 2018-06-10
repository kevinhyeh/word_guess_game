var words = ["USA", "Yemen", "Zimbabwe", "Japan", "Bangladesh", "Egypt", "Iraq", "Mexico", "Switzerland"];
var randomIndex = Math.floor(Math.random() * words.length);
var pickedWord = words[randomIndex];
var lowerLetter = pickedWord.toLowerCase();
var correctLetter = lowerLetter.split("");

// answer array
var answerArray = [];
for (var i = 0; i < pickedWord.length; i++) {
    answerArray[i] = "-";
}

// guessed letters and wins/guesses left
var letters = [];
var num = 15;
var wins = parseInt(0);

// first page load
document.querySelector(".picture").innerHTML = "Press any key to start";
document.querySelector(".counter").innerHTML = num;
document.querySelector(".wins").innerHTML = wins;
document.querySelector(".hidden").innerHTML = answerArray.join("");

function hangman(e) {
    var key = e.key;
    var rCharacters = pickedWord.length;
    lowerLetter = pickedWord.toLowerCase();

    // different word 
    if (answerArray.join("") == lowerLetter) {
        repeat();
    }

    for (var a = 0; a < rCharacters; a++) {

        document.querySelector(".hidden").innerHTML = answerArray.join("");

        for (var c = 0; c < rCharacters; c++) {
            if (key == lowerLetter[c]) {
                answerArray[c] = key;
                rCharacters--;
            }
        }
    }

    function repeat() {
        answerArray.splice(0, answerArray.length);
        randomIndex = Math.floor(Math.random() * words.length);
        pickedWord = words[randomIndex];
        answerArray = [];
        for (var i = 0; i < pickedWord.length; i++) {
            answerArray[i] = "-";
        }
        document.querySelector(".hidden").innerHTML = answerArray.join("");

    }

    // non repeat guessed words
    if (letters.indexOf(key) == -1) {
        letters.push(key);
        document.querySelector(".guesses").innerHTML = document.querySelector(".guesses").innerHTML + key + ", ";

        num--;
        document.querySelector(".counter").innerHTML = num;
    }

    // you lost message
    if (num == 0) {
        document.querySelector(".hidden").innerHTML = pickedWord;
        document.querySelector(".picture").innerHTML = "You Lost" + "<br>" + "The word is " + pickedWord + "<br>" + "Press Enter to play again";
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
        num = 15;
        document.querySelector(".counter").innerHTML = num;
    }

    // you won message
    if (answerArray.join("") == lowerLetter) {
        document.querySelector(".picture").innerHTML = "You Won!" + "<br>" + "Press Enter to play again";
        wins++;
        document.querySelector(".wins").innerHTML = wins;
    }

    // reset
    if (key == "Enter") {
        repeat();
        document.querySelector(".picture").innerHTML = "";
        num = 15;
        document.querySelector(".counter").innerHTML = num;
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
    }

}




document.onkeypress = hangman;





// alert(answer);