"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");
const btnNewEl = document.querySelector(".btn--new");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");

// starting conditions
let totalScore, currentScore, activePlayer, playing;

const initialSettings = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.remove("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
};

initialSettings();

const switchPlayer = function () {
  // Switch player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle -> if somthing is there then it will be removed else will be added
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice btn
btnRollEl.addEventListener("click", function () {
  if (playing) {
    // 1. Generating random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display random dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check dice rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // Display current score of active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold dice btn
btnHoldEl.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to the active player's total
    totalScore[activePlayer] += currentScore;
    // -> Display total score of active player
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    // -> Display current score to zero
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // 2. Check score >=100
    if (totalScore[activePlayer] >= 100) {
      // -> Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      // -> Switch player
      switchPlayer();
    }
  }
});

// New btn
btnNewEl.addEventListener("click", initialSettings);
