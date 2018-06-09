var words = ["USA", "Yemen", "Zimbabwe", "Canada", "Bangladesh", "Egypt", "Iraq", "Mexico", "Switzerland"];

// current word
var randomIndex = Math.floor(Math.random() * words.length);
var pickedWord = words[randomIndex];
var dash = "-".repeat(pickedWord.length);
var arrDash = [dash];
var individualDash = dash.split('');
var lowerCase = pickedWord.toLowerCase();
var correctLetter = lowerCase.split('');


// letters guessed
var letters = [];
var num = 15;
var numWins = 0;

document.querySelector(".counter").innerHTML = num;
document.querySelector(".wins").innerHTML = numWins;
document.querySelector(".hidden").innerHTML = arrDash;


function hangman(e) {
    var key = e.key;
    numWins++;
    num--;
    var indexDash = correctLetter.includes(key);

    randomIndex = Math.floor(Math.random() * words.length);
    pickedWord = words[randomIndex];
    dash = "-".repeat(pickedWord.length);
    individualDash = dash.split('');

    // current word
    for (var c = 0; c < pickedWord.length; c++) {
        if (correctLetter.includes(key)) {
        	// alert("hello");
            // console.log("Correct");
            console.log(indexDash);
            document.querySelector(".hidden").innerHTML = arrDash.splice(indexDash, 1, key);
            // console.log(arrDash);
        }
         if (num == 0) {
        document.querySelector(".hidden").innerHTML = dash;
    }
    }

   

    // number of wins

    document.querySelector(".wins").innerHTML = numWins;

    // letters guessed
    letters.push(" " + key);

    document.querySelector(".guesses").innerHTML = letters;

    if (num == 0) {
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
    }

    // number of guesses left
    //  

    document.querySelector(".counter").innerHTML = num;

    if (num == 0) {
        num = 15;
        document.querySelector(".counter").innerHTML = num;
    }

}

document.onkeypress = hangman;