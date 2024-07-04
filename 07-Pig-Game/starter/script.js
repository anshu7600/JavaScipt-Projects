"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0"); // if we are selecting elements with id we need #
// we also have another way to do it:
const score1El = document.getElementById("score--1"); // this will select id by default, so we don't need #
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector("#current--" + activePlayer).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle("player--active"); // toggle check if the class is present and if it is present it removes and if it is not there it will add it
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${diceRoll}.png`; // this is going to change the image dice

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector("#current--" + activePlayer).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = 0;
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  diceEl.classList.add("hidden");
});
