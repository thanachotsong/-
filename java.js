let showscore = document.getElementById('score'); 
let showkor = document.getElementById('kor');
let shownumber1 = document.getElementById('number1');
let showmark = document.getElementById('mark');
let shownumber2 = document.getElementById('number2');
let showanswer = document.getElementById('answer');
let showresult = document.getElementById('result');
let showplus = document.getElementById('plus');
showplus.checked = true;
showmark.innerHTML = "+";
let score = 0;
let kor = 0;
let number1 = 0;
let number2 = 0;
let total = 0;
showscore.innerHTML = score;
howkor.innerHTML = kor;

function random() {
    showkor.innerHTML = kor;
    number1 = Math.floor(Math.random() * 11);
    number2 = Math.floor(Math.random() * 11);
    shownumber1.innerHTML = number1;
    shownumber2.innerHTML = number2;
}

function start() {
    random();
    kor = 0;
    score = 0;
    showkor.innerHTML = kor;
    showscore.innerHTML = score;
    showanswer.value = '';
}

function btnanswer() {
    checkmark();
    if (total == showanswer.value) {
        showresult.innerHTML = 'ถูกต้อง';
        showresult.style.color = '#4c9900';
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'ไม่ถูกต้อง';
        showresult.style.color = '#ff3333';
        showanswer.value = '';
    }
    kor += 1;
    random();
}

function checkmark() {
    if (showmark.innerHTML == "+") {
        total = number1 + number2;
    } else if (showmark.innerHTML == "-") {
        total = number1 - number2;
    } else if (showmark.innerHTML == "×") {
        total = number1 * number2;
    } else if (showmark.innerHTML == "÷") {
        total = number1 / number2;
    }
}

function radiomark(value) {
    showmark.innerHTML = value;
}

random();