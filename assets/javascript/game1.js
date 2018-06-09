var words = ["USA", "Yemen", "Zimbabwe", "Japan", "Bangladesh", "Egypt", "Iraq", "Mexico", "Switzerland"];
var randomIndex = Math.floor(Math.random() * words.length);
var pickedWord = words[randomIndex];


// answer array
var answerArray = [];
for (var i = 0; i < pickedWord.length; i++) {
    answerArray[i] = "-";
}



var letters = [];
var num = 15;
var wins = 0;

document.querySelector(".counter").innerHTML = num;
document.querySelector(".wins").innerHTML = wins;
document.querySelector(".hidden").innerHTML = answerArray.join("");



function hangman(e) {
    var key = e.key;
    var remainingLetters = pickedWord.length;
    var correctLetter = pickedWord.toLowerCase();
    num--;

    for (var a = 0; a < remainingLetters; a++) {

        document.querySelector(".hidden").innerHTML = answerArray.join("");

        for (var c = 0; c < remainingLetters; c++) {
            if (key == correctLetter[c]) {
                answerArray[c] = key;
                remainingLetters--;
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

    if (num == 0) {
        repeat();
        document.querySelector(".picture").innerHTML = "You Lost";
    } else if (num > 0) {
    	document.querySelector(".picture").innerHTML = "";
    }

    // letters guessed
    letters.push(" " + key);

    document.querySelector(".guesses").innerHTML = letters;

    if (num == 0) {
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
    }






    // number of guesses left
    document.querySelector(".counter").innerHTML = num;

    if (num == 0) {
        num = 15;
        document.querySelector(".counter").innerHTML = num;
    }


    if (answerArray.join("") == pickedWord.toLowerCase()) {
        document.querySelector(".wins").innerHTML = wins++;
    } 
}


document.onkeypress = hangman;





// alert(answer);