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

guessSubmit.addEventListener("click", submit);
guessField.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        submit();
    }
})
function submit() {
    let inputNum = guessField.value;
    if(inputNum < 1 || inputNum > 100) {
        message.textContent = 'input Correct Number! (1~100)';
        return;
    } else {
        message.textContent = '';

        if(inputNum != CORRECT_NUM) {
            if(inputNum > CORRECT_NUM)
                lowOrHi.textContent = 'DOWN';
            else if(inputNum < CORRECT_NUM)
                lowOrHi.textContent = 'UP';

            guessCnt++;
            lifeCnt.textContent = "Your Life : " + (LIFE - guessCnt);
            
            //이전에 고른 숫자들 출력
            if(guessCnt > 1)
                guesses.textContent += ', ';
            guesses.textContent += guessField.value;
    
            if(guessCnt >= LIFE) {
                message.textContent = 'Boom!';
                guessSubmit.textContent = 'Retry?';
                guessSubmit.removeEventListener("click", submit);
                guessField.removeEventListener("keydown", submit);
                guessSubmit.addEventListener("click", reset);
            }

            //배경을 단계별로 붉어지게
            let level = Math.round((255/LIFE)*guessCnt);
            let color = `rgb(255,${255 - level},${255 - level})`;
            document.body.style.backgroundColor = color;
        } else {
            lowOrHi.style.fontWeight = "bold";
            lowOrHi.textContent = "Correct!";
            document.body.style.backgroundColor = `rgb(0, 255, 0)`;
            guessSubmit.textContent = 'Retry?';
            guessSubmit.removeEventListener("click", submit);
            guessField.removeEventListener("keydown", submit);
            guessSubmit.addEventListener("click", reset);
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

    document.body.style.backgroundColor = `rgb(255, 255, 255)`;
    lowOrHi.style.fontWeight = "normal";

    guessSubmit.addEventListener("click", submit);
    guessField.addEventListener("keydown", function(e) {
        if(e.key === "Enter") {
            submit();
        }
    })
    guessSubmit.removeEventListener("click", reset);
}


