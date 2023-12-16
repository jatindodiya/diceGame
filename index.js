
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var imagePath1 = "/images/dice" + randomNumber1 +".png"
var imagePath2 = "/images/dice" + randomNumber2 +".png"

document.querySelectorAll("img")[0].setAttribute("src",imagePath1)
document.querySelectorAll("img")[1].setAttribute("src",imagePath2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }