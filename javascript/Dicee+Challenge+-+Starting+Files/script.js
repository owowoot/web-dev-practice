// dice value according to img
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);
// on page refresh, randomize dice

// if player 1 dice is larger than player 2, display player 1 wins and vice versa.
var title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  title.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  title.textContent = "Player 2 Wins!";
} else {
  title.textContent = "Draw!";
}
