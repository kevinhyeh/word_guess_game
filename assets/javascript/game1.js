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

var letters = [];
var num = 15;
var wins = parseInt(0);

document.querySelector(".counter").innerHTML = num;
document.querySelector(".wins").innerHTML = wins;
document.querySelector(".hidden").innerHTML = answerArray.join("");

function hangman(e) {
    var key = e.key;
    var rCharacters = pickedWord.length;
    lowerLetter = pickedWord.toLowerCase();

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

    if (letters.indexOf(key) == -1 && correctLetter.includes(key) == false && key == "Enter") {
        letters.push(key);
        document.querySelector(".guesses").innerHTML = document.querySelector(".guesses").innerHTML + key + ", ";

        num--;
        document.querySelector(".counter").innerHTML = num;
    }

    if (num == 0) {
        document.querySelector(".hidden").innerHTML = pickedWord;
        document.querySelector(".picture").innerHTML = "You Lost!" + "<br>" + "Press 'Enter' to play again";
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
        num = 15;
        document.querySelector(".counter").innerHTML = num;
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

    // you won text
    if (answerArray.join("") == lowerLetter) {
        document.querySelector(".picture").innerHTML = "You Won! Press 'Enter' to keep playing";
        wins++;
        document.querySelector(".wins").innerHTML = wins;
    }

}




document.onkeypress = hangman;





// alert(answer);