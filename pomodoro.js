const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes'); 
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');

let myInterval; 
let state = true;


myInterval = setInterval(myInterval, 4000);

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)

  if(state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;
        
        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0){
            bells.play()
            clearInterval(myInterval);
        }

}
myInterval = setInterval(updateSeconds, 1000);
} else {
  alert('Session has already started.')
}
}



startBtn.addEventListener('click', appTimer);
resetBtn.addEventListener('click', myInterval(clearInterval))
pauseBtn.addEventListener('click', () => {
    session.textContent = appTimer(sessionAmount)
})
