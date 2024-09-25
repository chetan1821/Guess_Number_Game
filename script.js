let randomNunber = parseInt(Math.random() * 100 + 1);
console.log(randomNunber);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a number more than 1');
  } else if (guess > 100) {
    alert('Plaese enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dispayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNunber}`);
      endGame();
    } else {
      dispayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNunber) {
    displayMessage(`You guessed it right ${randomNunber}`);
    endGame();
  } else if (guess < randomNunber) {
    displayMessage(`Number is TO Low`);
  } else if (guess > randomNunber) {
    displayMessage(`Number is TO High`);
  }
}
function dispayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainig.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game </h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNunber = parseInt(Math.random() * 100 + 1);
    prevGuess =[]
    numGuess = 1;
    guessSlot.innerHTML= '';
    remainig.innerHTML=`${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
  
}
