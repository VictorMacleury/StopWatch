let seconds = 00;
let tens = 00;
let minutes = 00;

let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMinutes = document.querySelector('.minutes');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;
let clicked = false;

btnStart.addEventListener('click', () => {
    if (!clicked) {
        interval = setInterval(startTimer, 10);
        clicked = true;
    } else {
        alert('Timer has already started!');
    }
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    clicked = false;
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinutes.innerHTML = minutes;
    clicked = false;
})

function startTimer() {
    tens++
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        minutes++
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + tens;
    }
    if (minutes > 9) {
        getMinutes.innerHTML = minutes;
    }
}