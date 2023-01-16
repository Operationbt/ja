const CORRECT_NUM = Math.floor(Math.random() * 100) + 1; //1~100난수
let guessCnt = 0;
//html 요소들을 js변수들로 가져오기
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

guessSubmit.addEventListener('click', submit);
function submit(input) {
    guessCnt++;
    guesses.textContent += input + ' ';
}


