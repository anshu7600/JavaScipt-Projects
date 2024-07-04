"use strict";
// Practice
/*
console.log(document.querySelector(".message")); // we can do this if we want to select a class named message and if we want to get an id we can just change the . to # and the rest is same.
// That will give us the entire element and this is basically DOM manupulation

// But does this would be more usefull:
console.log(document.querySelector(".message").textContent); // writing .textContent is going to give us the value the element contains

// when we interact JavaScript with Html, it called DOM manupulation
// DOM, stands for Document Object Model, and it allows to change text, HTML attributes, and even CSS Style
// document is a special object that is the entry point to the DOM
// DOM is not part of JavaScript

// To Set the the value of the content we can do this
d ocument.querySelector(".message").textContent = "🎊✔️ Correct Number!"; // it changes the value to whatever we have after the equal sign

// And now if we read it, it is going to be the new content
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// this is going give us the value in the input and notice this time it has to be .value to get the value of an input statement
console.log(document.querySelector(".guess").value);
// And we can also use .value to set the value too:
// Example:
document.querySelector(".guess").value = 24;
*/

// Hand Click Events
// To do this we have to use a event listener

// Code for project from now

// Defining Secret number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const gameLogic = function () {
  let guessNumber = document.querySelector(".guess").value; // this is how we can make a function here
  //   console.log(typeof guessNumber); // notice that the type is string and to compare we need a number so we can do this:
  guessNumber = Number(guessNumber);
  //   console.log(guessNumber);
  if (!guessNumber) {
    /* if we don't get any number it is going to be 0 default and that is a falsy value so convert it to a truthy */
    displayMessage("⛔ No Number Passed!");
    // Correct
  } else if (guessNumber === secretNumber && score > 0) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🥳🎊 Correct Number");
    // color changed to green
    document.querySelector("body").style.backgroundColor = "#60b347"; // changing the color of the background
    // making the box wider
    document.querySelector(".number").style.width = "30rem";
    // if score is more than high score change high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (score > 0) {
    displayMessage(guessNumber > secretNumber ? "📈Too High" : "📉Too Low");
    score--;
  }
  // Score is 0
  if (score === 0) {
    displayMessage("💥 You Lost the GAME!");
  }
  document.querySelector(".score").textContent = score;
};

const reset = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", gameLogic);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") gameLogic();
});
// this is a method addEventListener(), and inside it we need to pass the type, which in this case is the "click", and then we also have to tell it what to do when we do click, and for that we have to make a function and then pass it to it as the second argument, or we can just make the function here
// Note that we don't call the function and JavaScript take cares of that, and will only call it when the specific event happenes and we are only making the function

// Making Again work
document.querySelector(".again").addEventListener("click", reset);
