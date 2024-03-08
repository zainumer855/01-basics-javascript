'use strict';
/*
console.log(document.querySelector('.message').textContent); 
document.querySelector('.message').textContent = '🎉 Correct!';
console.log(document.querySelector('.message').textContent); 

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 18;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 19;
*/

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currScore = 20;
let highScore = 0;

// Check btn
document.querySelector('.check').addEventListener('click', function() {

    const guess = Number (document.querySelector('.guess').value);

    // when there is no input
    if (!guess)
    {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    // when guess is correct
    else if(guess === secretNumber)
    {
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = '🎉 Correct';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (currScore > highScore) {
            highScore = currScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // when guess is too high
    else if(guess > secretNumber)
    {
        document.querySelector('.message').textContent = '📈 Too High!';
        
        if (currScore > 1) {
            currScore--;
            document.querySelector('.score').textContent = currScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '😞 You loose the game!';
        }
    }
    // when guess is too low
    else if(guess < secretNumber)
    {
        document.querySelector('.message').textContent = '📉 Too Low!';
        if (currScore > 1) {
            currScore--;
            document.querySelector('.score').textContent = currScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '😞 You loose the game!';
        }
    }
})

// Reset Btn
document.querySelector('.again').addEventListener('click', function() {
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = null;

    document.querySelector('.message').textContent = 'Start guessing...';

    currScore = 20;
    document.querySelector('.score').textContent = currScore;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
*/

// Refactor the code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currScore = 20;
let highScore = 0;

const displayMsg = message => document.querySelector('.message').textContent = message;

const hiddenNum = num => document.querySelector('.number').textContent = num;

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number (document.querySelector('.guess').value);

    // when there is no input
    if (!guess)
    {
        displayMsg('⛔ No Number!')
    }
    // when guess is correct
    else if(guess === secretNumber)
    {
        hiddenNum(secretNumber);
        displayMsg('🎉 Correct');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (currScore > highScore) {
            highScore = currScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // when guess is wrong
    else if(guess !== secretNumber){

        displayMsg(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
        
        if (currScore > 1) {
            currScore--;
            document.querySelector('.score').textContent = currScore;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMsg('😞 You loose the game!')
        }
    }
})

// Reset btn
document.querySelector('.again').addEventListener('click', function() {
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = null;
    hiddenNum('?');
    displayMsg('Start guessing...')
    currScore = 20;
    document.querySelector('.score').textContent = currScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})