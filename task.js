window.addEventListener('load',init)

let time = 5;
let speed = 0;
let counts = setInterval(updated, 1000);
let upto = 10;
let score = 0;
let isPlaying; 

const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const seconds = document.querySelector('#seconds');

var count = document.getElementById("counter");
var words = [
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
    'definition',
    'champion',
    'ghost',
    'fierce'
  ];
  function init() { 
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkstatus, 50);
}

function startMatch () {
  if (matchWords()) {
    isPlaying = true;
    time = 6 ;
    showWord(words);
    wordInput.value = '';
    score ++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else{
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function matchWords(){
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'correct!!!'
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}
  
 
function updated() {
  count.innerHTML = --upto;
  if (upto === 0) {
    clearInterval(counts);
  }
}
  
  

function showWord(words) {
 const randIndex=Math.floor(Math.random() * words.length);
 currentWord.innerHTML=words[randIndex];
}
  
function countdown(){
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkstatus (){
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over !!!';
    score = -1;
  }
}