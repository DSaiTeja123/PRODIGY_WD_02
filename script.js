let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.time');
let int = null;
let lapCounter = 0;
// This event listener starts the timer when the start button is clicked
document.getElementById("startBtn").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});
// This function measures the time
function displayTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? "0" + Math.floor(milliseconds / 10) : Math.floor(milliseconds / 10);
  timerRef.innerHTML = `<span class='numbers' id='hours'>${h}</span><span class='units'>hr</span> :` +
                       `<span class='numbers' id='minutes'>${m}</span><span class='units'>min</span> :` +
                       `<span class='numbers' id='seconds'>${s}</span><span class='units'>sec</span> :` +
                       `<span class='numbers' id='milliseconds'>${ms}</span><span class='units'>ms</span>`;
}
// This event listener stops the timer when the pause button is clicked
document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(int);
});
// This event listener adds a lap to the timer when the lap button is clicked
document.getElementById("lapBtn").addEventListener("click", () => {
  lapCounter++;
  document.getElementById("lapCount").textContent = `Laps: ${lapCounter}`;
});
// This event listener resets the timer when the reset button is clicked
document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "<span class='numbers' id='hours'>00</span><span class='units'>hr</span> :" +
                       "<span class='numbers' id='minutes'>00</span><span class='units'>min</span> :" +
                       "<span class='numbers' id='seconds'>00</span><span class='units'>sec</span> :" +
                       "<span class='numbers' id='milliseconds'>00</span><span class='units'>ms</span>";
  lapCounter = 0;
  document.getElementById("lapCount").textContent = "Laps: 0";
});