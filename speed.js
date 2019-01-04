window.addEventListener('load', init);

//Global variables



const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

// Initialize Game
function init(){
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus);
}


function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1, display none
    if (score === -1) {
        scoreDisplay.innerHTML = 0;        
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    
    currentWord.innerHTML = words[randIndex];
  }

  function countdown(){
      // Make sure time is not run out
      if(time > 0){
        // Decrement
        time--;
      } else if(time === 0){
          // Game is over
          isPlaying = false;
      }
      // show time
      timeDisplay.innerHTML = time;
  }

  // Check game status
  function checkStatus(){
      if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
        score = -1;
      }
  }