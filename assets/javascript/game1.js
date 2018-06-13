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

// audio variables
var japanAudio = new Audio('assets/audio/japan_anthem.mp3');
var usaAudio = new Audio('assets/audio/usa_anthem.mp3');
var mexicoAudio = new Audio('assets/audio/mexico_anthem.mp3');
var yemenAudio = new Audio('assets/audio/yemen_anthem.mp3');
var zimbabweAudio = new Audio('assets/audio/zimbabwe_anthem.mp3');
var bangladeshAudio = new Audio('assets/audio/bangladesh_anthem.mp3');
var egyptAudio = new Audio('assets/audio/egypt_anthem.mp3');
var iraqAudio = new Audio('assets/audio/iraq_anthem.mp3');
var switzerlandAudio = new Audio('assets/audio/switzerland_anthem.mp3');

// first page load
document.querySelector(".message").innerHTML = "Press any key to start";
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

    // rechoose word function
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

    // you lost message, reset letters guessed, reset num of guessed letters
    if (num == 0) {
        document.querySelector(".hidden").innerHTML = pickedWord;
        document.querySelector(".message").innerHTML = "You Lost." + "<br>" + "<br>" + "The word is " + pickedWord + "." + "<br>" + "<br>" + "Press Enter to play again.";
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
        num = 15;
        document.querySelector(".counter").innerHTML = num;
    }

    // you won message, increase wins by 1
    if (answerArray.join("") == lowerLetter) {
        document.querySelector(".message").innerHTML = "You Won! Turn up volume to hear anthem." + "<br>" + "Press Enter to play again.";
        wins++;
        document.querySelector(".wins").innerHTML = wins;
    }

    // audio play and pause functions
    function audioPause(songPause) {
        songPause.pause();
    }

    function audioPlay(songPlay) {
        songPlay.play();
    }

    // reset
    if (key == "Enter") {
        repeat();
        document.querySelector(".message").innerHTML = "";
        num = 15;
        document.querySelector(".counter").innerHTML = num;
        letters.splice(0, letters.length);
        document.querySelector(".guesses").innerHTML = letters;
        document.querySelector(".picture").style.visibility = "hidden";
        audioPause(japanAudio);
        audioPause(bangladeshAudio);
        audioPause(egyptAudio);
        audioPause(iraqAudio);
        audioPause(mexicoAudio);
        audioPause(switzerlandAudio);
        audioPause(usaAudio);
        audioPause(yemenAudio);
        audioPause(zimbabweAudio);
    }

    // show flag
    if (answerArray.join("") == lowerLetter && lowerLetter == "japan") {
        audioPlay(japanAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/japan_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "bangladesh") {
        audioPlay(bangladeshAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/bangladesh_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "egypt") {
        audioPlay(egyptAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/egypt_flag.jpg" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "iraq") {
        audioPlay(iraqAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/iraq_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "mexico") {
        audioPlay(mexicoAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/mexico_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "switzerland") {
        audioPlay(switzerlandAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/switzerland_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "usa") {
        audioPlay(usaAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/usa_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "yemen") {
        audioPlay(yemenAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/yemen_flag.png" class="picture">';
    } else if (answerArray.join("") == lowerLetter && lowerLetter == "zimbabwe") {
        audioPlay(zimbabweAudio);
        document.querySelector(".picturebox").innerHTML = '<img src="assets/images/zimbabwe_flag.png" class="picture">';
    }
}




document.onkeypress = hangman;







// alert(answer);