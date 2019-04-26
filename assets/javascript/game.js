var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var totalGuesses = 9;
var guessedChoices = [];

document.onkeyup = function (event) {

  var userGuess = event.key;

  var computerChoice = letters[Math.floor(Math.random() * letters.length)];

  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


  if (options.indexOf(userGuess) > -1) {

    if (userGuess === computerChoice) {
      wins++;
      totalGuesses = 9;
      guessedChoices = [];
    }

    if (userGuess != computerChoice) {
      totalGuesses--;
      guessedChoices.push(userGuess);
    }

    if (totalGuesses === 0) {

      totalGuesses = 9;
      losses++;
      guessedChoices = [];


    }


    var html =
      "<h1> The Psychic Game </h1>" +
      "<p>Guess what letter I'm thinking of!</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + totalGuesses + "</p>" +
      "<p>Your Guesses so far: " + guessedChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;


  }
};