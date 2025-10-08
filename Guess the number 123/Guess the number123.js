let secretNumber = Math.floor(Math.random()*50)+1
let maxAttempts = 10
let currentAttemps = 0

function checkGuess(){
    const input = document.getElementById('guess')
    const message = document.getElementById('message')
    const attemps = document.getElementById('attemps')

    const guess = parseInt(input.value);
    ++currentAttemps;

    if(guess === secretNumber){
        message.innerText = `congrats, you guessed the number 🎉`;
        message.className = 'font-bold mt-2'
        input.disabled = true;
    }
    else if(currentAttemps >= maxAttempts){
        message.innerText = `Sorry you lose😔 the secret number was : ${secretNumber}`
        message.className = 'font-bold mt-2'
        input.disabled = true;
    }
    else if (guess < secretNumber){
        alert('Higher ⬆️');
    }
    else{
        alert('Lower ⬇️')
    }
    document.getElementById('Attempts').innerText = `Attemp No.${currentAttemps} from No.${maxAttempts}`
}
