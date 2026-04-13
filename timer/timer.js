const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    timerDisplay.textContent = `${h}:${m}:${s}`;
    hoursSpan.textContent = h;
    minutesSpan.textContent = m;
    secondsSpan.textContent = s;
}
function incrementTime() {
    seconds++;
    
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            
            if (hours >= 99) {
                hours = 0;
            }
        }
    }
    
    updateDisplay();
}
function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(incrementTime, 1000);
        isRunning = true;
    }
}
function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}
function resetTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
    hours = 0;
    minutes = 0;
    seconds = 0;
    
    updateDisplay();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
updateDisplay();