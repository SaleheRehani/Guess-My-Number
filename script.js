'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent =
    displayMessage('⛔️ No number!');
    // When the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong sort using ? operator
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      //   document.querySelector('.message').textContent =
      displayMessage('👎🏿 You lost the game!!');
    }
  }

  // OLD CODE BEFORE REFACTORING

  //          // When guess is too high
  //       } else if (guess > secretNumber && score > 1) {
  //         document.querySelector('.message').textContent = '📈 Too high';
  //         score--;
  //         // When guess is too low
  //       } else if (guess < secretNumber && score > 1) {
  //         document.querySelector('.message').textContent = '📉 Too low';
  //         score--;
  //     When the player loses
  //     }  else {
  //     score = 0;
  //     document.querySelector('.message').textContent = '👎🏿 You lost the game!!';
  //   }    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //   document.querySelector('.message').textContent =
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
