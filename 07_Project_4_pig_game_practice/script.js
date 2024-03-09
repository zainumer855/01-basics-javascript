"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const diceEl = document.querySelector(".dice");

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add("hidden");
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling button functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // -> target dice to roll according to the random number
    diceEl.src = `dice-${dice}.png`;
    // 2. display dice roll
    diceEl.classList.remove("hidden");

    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice;
      // -> display new score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold button functionalty
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // 1. Current player win
      playing = false;
      console.log(activePlayer);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      diceEl.classList.add("hidden");
    } else {
      // 2. add current score to the active's total score
      switchPlayer();
    }
  }
});

// New button functionality
btnNew.addEventListener("click", init);
