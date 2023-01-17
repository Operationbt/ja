let CORRECT_NUM = Math.floor(Math.random() * 100) + 1; //1~100난수
const LIFE = 10;
let guessCnt = 0;

//html 요소들을 js변수들로 가져오기
const guessSubmit = document.getElementById('guessSubmit');
const lifeCnt = document.getElementById('lifeCnt');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
const lowOrHi = document.getElementById('lowOrHi');
const guessField = document.getElementById('guessField');
const message = document.getElementById("message");

guessSubmit.addEventListener('click', submit);
function submit() {
    let inputNum = guessField.value;
    if(inputNum == 0) {
        message.innerText = 'input Number type!';
        return;
    } else {
        message.innerText = '';

        if(inputNum > CORRECT_NUM)
            lowOrHi.innerText = 'High';
        else if(inputNum < CORRECT_NUM)
            lowOrHi.innerText = 'Low';
        else {
            message.innerText = "Correct!";
            guessSubmit.textContent = 'Retry?';
            guessSubmit.removeEventListener('click', submit);
            guessSubmit.addEventListener('click', reset);
        }
        guessCnt++;
        lifeCnt.innerText = "Your Life : " + (LIFE - guessCnt);

        if(guessCnt > 1)
            guesses.innerText += ', ';
        guesses.innerText += guessField.value;

        if(guessCnt >= LIFE) {
            message.innerText = 'Boom!';
            guessSubmit.textContent = 'Retry?';
            guessSubmit.removeEventListener('click', submit);
            guessSubmit.addEventListener('click', reset);
        }
    }
}
function reset() {
    CORRECT_NUM = Math.floor(Math.random() * 100) + 1;
    guessSubmit.textContent = 'Submit';
    lifeCnt.textContent = '';
    guesses.textContent = '';
    lowOrHi.textContent = '';
    guessField.textContent = '';
    message.textContent = '';
    guessCnt = 0; 
    guessSubmit.addEventListener('click', submit);
    guessSubmit.removeEventListener('click', reset);
}


