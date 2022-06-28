"use strict";

//NAVBAR SCROLL
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    document.getElementById("logo").style.width = "20vw";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    document.getElementById("logo").style.width = "40vw";
  }
} //TITLE ANIMATION
// var DynamicTitle = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
//   };
//   DynamicTitle.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//     var that = this;
//     var delta = 300 - Math.random() * 100;
//     if (this.isDeleting) { delta /= 2; }
//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }
//     setTimeout(function() {
//       that.tick();
//     }, delta);
//   };
//   window.onload = function() {
//     var elements = document.getElementsByClassName('dynamic-title');
//     for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-rotate');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".dynamic-title > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
//   };
// var text = ["TIC TAC TOE", "HANGMAN", "ROCK PAPER SCISSORS"];
// var counter = 0;
// var elem = document.getElementById("game-name");
// setInterval(change, 3000);
// function change() {
//  elem.innerHTML = text[counter];
//         counter++;
//         if(counter >= text.length) { counter = 0; }
// }
// var game = new Array("TIC TAC TOE", "HANGMAN", "ROCK PAPER SCISSORS");
// var counter = 0;
// document.getElementById('game-name').innerHTML = game[counter];
// Changegame1();
// function Changegame1(){
//   incrementIndex()
//   document.getElementById('game-name1').innerHTML = game[counter];
//   document.getElementById('game-name').style.opacity = 0;
//   document.getElementById('game-name1').style.opacity = 1;
//   setTimeout(Changegame, 2000);
// }
// function Changegame(){
//   incrementIndex();
//   document.getElementById('game-name').innerHTML = greet[counter];
//   document.getElementById('game-name').style.opacity = 1;
//   document.getElementById('game-name1').style.opacity = 0;
//   setTimeout(Changegame1, 2000);
// }
// function incrementIndex(){
//   if(counter < greet.length - 1 ){
//     counter++;
//   }else{
//     counter = 0;
//   }
// }
// //TITLE ANIMATION
// const text = document.querySelector(".dynamic");
// const typer = (str, target) => {
//   let newText = "";
//   let step = 1;
//   const element = target;
//   const tic = setInterval(() => {
//     if (step === str.length) clearInterval(tic);
//     newText += str.slice(step - 1, step);
//     step += 1;
//     element.innerHTML = newText;
//   }, 100);
// };
// const handler = (timer) => {
//   let counter = 0;
//   const arrayOfText = ["HANGMAN", "ROCK PAPER SCISSORS"];
//   const change = () => {
//     typer(arrayOfText[counter], text);
//     counter += 1;
//     if (counter >= arrayOfText.length) counter = 0;
//   };
//   setInterval(change, timer);
// };
// window.addEventListener("load", handler(2000));
//HANGMAN GAME//


(function () {
  "use strict";

  var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

  function setup() {
    /* start config options */
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    lives = 5;
    words = ["pizza", "chocolate", "peppermint", "water"];
    messages = {
      win: 'You win!',
      lose: 'Game over!',
      guessed: ' already guessed, please try again...',
      validLetter: 'Please enter a letter from A-Z'
    };
    /* end config options */

    lettersGuessed = lettersMatched = '';
    numLettersMatched = 0;
    /* choose a word */

    currentWord = words[Math.floor(Math.random() * words.length)];
    /* make #man and #output blank, create vars for later access */

    output = document.getElementById("output");
    man = document.getElementById("man");
    guessInput = document.getElementById("letter");
    man.innerHTML = 'You have ' + lives + ' lives remaining';
    output.innerHTML = '';
    document.getElementById("letter").value = '';
    /* make sure guess button is enabled */

    guessButton = document.getElementById("guess");
    guessInput.style.display = 'flex';
    guessButton.style.display = 'flex';
    /* set up display of letters in current word */

    letters = document.getElementById("letters");
    letters.innerHTML = '<li class="current-word">Current word:</li>';
    var letter, i;

    for (i = 0; i < currentWord.length; i++) {
      letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
      letters.insertAdjacentHTML('beforeend', letter);
    }
  }

  function gameOver(win) {
    if (win) {
      output.innerHTML = messages.win;
      output.classList.add('win');
    } else {
      output.innerHTML = messages.lose;
      output.classList.add('error');
    }

    guessInput.style.display = guessButton.style.display = 'none';
    guessInput.value = '';
  }
  /* Start game - should ideally check for existing functions attached to window.onload */


  window.onload = setup();
  /* buttons */

  document.getElementById("restart").onclick = setup;
  /* reset letter to guess on click */

  guessInput.onclick = function () {
    this.value = '';
  };
  /* main guess function when user clicks #guess */


  document.getElementById('hangman').onsubmit = function (e) {
    if (e.preventDefault) e.preventDefault();
    output.innerHTML = '';
    output.classList.remove('error', 'warning');
    guess = guessInput.value;
    /* does guess have a value? if yes continue, if no, error */

    if (guess) {
      /* is guess a valid letter? if so carry on, else error */
      if (availableLetters.indexOf(guess) > -1) {
        /* has it been guessed (missed or matched) already? if so, abandon & add notice */
        if (lettersMatched && lettersMatched.indexOf(guess) > -1 || lettersGuessed && lettersGuessed.indexOf(guess) > -1) {
          output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
          output.classList.add("warning");
        }
        /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
        else if (currentWord.indexOf(guess) > -1) {
            var lettersToShow;
            lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

            for (var i = 0; i < lettersToShow.length; i++) {
              lettersToShow[i].classList.add("correct");
            }
            /* check to see if letter appears multiple times */


            for (var j = 0; j < currentWord.length; j++) {
              if (currentWord.charAt(j) === guess) {
                numLettersMatched += 1;
              }
            }

            lettersMatched += guess;

            if (numLettersMatched === currentWord.length) {
              gameOver(true);
            }
          }
          /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
          else {
              lettersGuessed += guess;
              lives--;
              man.innerHTML = 'You have ' + lives + ' lives remaining';
              if (lives === 0) gameOver();
            }
      }
      /* not a valid letter, error */
      else {
          output.classList.add('error');
          output.innerHTML = messages.validLetter;
        }
    }
    /* no letter entered, error */
    else {
        output.classList.add('error');
        output.innerHTML = messages.validLetter;
      }

    return false;
  };
})(); //TIC TAC TOE GAME//


window.addEventListener('DOMContentLoaded', function () {
  var tiles = Array.from(document.querySelectorAll('.tile'));
  var playerDisplay = document.querySelector('.display-player');
  var resetButton = document.querySelector('#reset');
  var announcer = document.querySelector('.announcer');
  var board = ['', '', '', '', '', '', '', '', ''];
  var currentPlayer = 'X';
  var isGameActive = true;
  var PLAYERX_WON = 'PLAYERX_WON';
  var PLAYERO_WON = 'PLAYERO_WON';
  var TIE = 'TIE';
  var winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  var isValidAction = function isValidAction(tile) {
    if (tile.innerText === 'X' || tile.innerText === 'O') {
      return false;
    }

    return true;
  };

  var updateBoard = function updateBoard(index) {
    board[index] = currentPlayer;
  };

  var changePlayer = function changePlayer() {
    playerDisplay.classList.remove("player".concat(currentPlayer));
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add("player".concat(currentPlayer));
  };

  var announce = function announce(type) {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;

      case PLAYERX_WON:
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;

      case TIE:
        announcer.innerText = 'Tie';
    }

    announcer.classList.remove('hide');
  };

  function handleResultValidation() {
    var roundWon = false;

    for (var i = 0; i <= 7; i++) {
      var winCondition = winningConditions[i];
      var a = board[winCondition[0]];
      var b = board[winCondition[1]];
      var c = board[winCondition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }

    if (!board.includes("")) announce(TIE);
  }

  var userAction = function userAction(tile, index) {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add("player".concat(currentPlayer));
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  tiles.forEach(function (tile, index) {
    tile.addEventListener('click', function () {
      return userAction(tile, index);
    });
  });

  var resetBoard = function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
      changePlayer();
    }

    tiles.forEach(function (tile) {
      tile.innerText = '';
      tile.classList.remove('playerX');
      tile.classList.remove('playerO');
    });
  };

  resetButton.addEventListener('click', resetBoard);
});
//# sourceMappingURL=script.dev.js.map
