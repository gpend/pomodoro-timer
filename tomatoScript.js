const timerText = document.querySelector('.timer-text')
const workBtn = document.querySelector('.work-btn')
const shortBreakBtn = document.querySelector('.short-break-btn')
const longBreakBtn = document.querySelector('.long-break-btn')
const fiveMin = 5 * 60000
const twentyFiveMinutes = 25 * 60000
let x = 0

workBtn.addEventListener("click", function () {Timer('w25')})
shortBreakBtn.addEventListener("click", function () {Timer('b5')})
longBreakBtn.addEventListener("click", function () {Timer('b25')})

let now = 0
let later = 0

function CountDown(now, later, end){

    clearInterval(x);

    x = setInterval(function() {
        now = new Date().getTime()
        var distance = later - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerText.innerHTML = minutes + ':' + seconds;
    
        if (distance < 0) {
            clearInterval(x);
            timerText.innerHTML = end;
        }
    },1000)
}


function Timer(time){
    switch (time){
        case 'b5':
            now = new Date().getTime()
            console.log('Five minute timer');
            later = now + fiveMin
            end = "Back to work"
            break;
        case 'b25':
            now = new Date().getTime()
            console.log('Twenty five minute timer')
            later = now + twentyFiveMinutes
            end = "Back to work"
            break;
        case 'w25':
            now = new Date().getTime()
            console.log('Twenty five minute timer')
            later = now + twentyFiveMinutes
            end = "You earned a break"
            break;
    }
    
    CountDown(now, later, end)

}
