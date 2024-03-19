const hourTmp = document.getElementById("hour")
const minuteTmp = document.getElementById("minute")
const secondTmp = document.getElementById("second")
const millisecTmp = document.getElementById("millisecond")
const starBtn = document.getElementById("Start")
const pauseBtn = document.getElementById("Pause")
const resetBtn = document.getElementById("Reset")

let cronInter
let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false


function startTimer() {
    cronInter = setInterval(function () {

        if (!isPaused) {

            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            if (minutes === 60) {
                hours++
                minutes = 0
            }

            hourTmp.innerHTML = formatTime(hours)
            minuteTmp.innerHTML = formatTime(minutes)
            secondTmp.innerHTML = formatTime(seconds)
            millisecTmp.innerHTML = milliseconds
        }

    }, 10);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function stopTime() {
    clearInterval(cronInter)
}

function resetTime() {
    clearInterval(cronInter)
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0

    hourTmp.innerHTML = "00"
    minuteTmp.innerHTML = "00"
    secondTmp.innerHTML = "00"
    millisecTmp.innerHTML = "000"
}

resetBtn.addEventListener("click", resetTime)
pauseBtn.addEventListener("click", stopTime)
starBtn.addEventListener("click", startTimer)













