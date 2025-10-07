let seconds = 0;
let minutes = 0;
let hours = 0;
let interval; // هذا بنستخدمه مع setInterval

function updateDisplay() {
  const display = document.getElementById("display");

  // تنسيق الوقت: 00:00:00
  let formatted =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  display.innerText = formatted; // the text 
}
function startTimer() {
  if (interval) return; // if On don't on it again

  interval = setInterval(() => { // edit the time
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}
function stopTimer() { // stop timer
  clearInterval(interval);
  interval = null;
}
function resetTimer() { // reset timer
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

