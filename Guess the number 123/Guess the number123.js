document.getElementById('check').onclick = checkGuess
let secretNumber = Math.floor(Math.random()*50)+1
let maxAttempts = 10
let currentAttemps = 0

function checkGuess(){
    const input = document.getElementById('guess')
    const message = document.getElementById('message')
    const restart = document.getElementById('check')

    const guess = parseInt(input.value);
    ++currentAttemps;

    if(guess === secretNumber){
        message.innerText = `congrats, you guessed the number 🎉`;
        message.className = 'font-bold mt-2'
        input.disabled = true;
        restart.innerText = 'Restart'
        restart.onclick = restartGame

    }
    else if(currentAttemps >= maxAttempts){
        message.innerText = `Sorry you lose😔 the secret number was : ${secretNumber}`
        message.className = 'font-bold mt-2'
        input.disabled = true;
    }
    else if (guess < secretNumber){
        alert('Higher ↑');
    }
    else if(guess > secretNumber){
        alert('Lower ↓')
    }
    else{
    document.getElementById('Attempts').innerText = `Attemp No.${currentAttemps} from No.${maxAttempts}`
}}
    
function restartGame() {
  secretNumber = Math.floor(Math.random() * 50) + 1;
  currentAttemps = 0;

  const input = document.getElementById("guess");
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");
  const button = document.getElementById("check");

  input.disabled = false;
  input.value = "";
  message.innerText = "";
  button.innerText = "Guess";
  button.onclick = checkGuess();
}
