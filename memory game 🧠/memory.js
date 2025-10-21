const symbols = ["🐶", "🐱", "🐭", "🐻","🐺", "🦊","🐯","🐵"]; //*الاشكال 
let cards = [...symbols, ...symbols]; //* التكرار
cards.sort(() => Math.random() - 0.5); //* الترتيب 
//---------------المؤقت--------------------
let attempts = 0;
let seconds = 0;
let timerinterval;
const display = document.getElementById("timer");

function startTimer() {
  if(timerinterval) return; // if On don't on it again
  timerinterval = setInterval(() => {
    seconds++;
    display.innerText =`time : ${seconds}s`;
  }, 1000);
}

function stopTimer(){
  clearInterval(timerinterval);
}
//-----------------------------------------------------------

const board = document.getElementById("board"); //* القائمة
let flipped = [];
let lock = false;

cards.forEach(symbol => { //* الكلمات
  const card = document.createElement("div"); //* الكارت
  card.className = "cards bg-slate-200 text-3xl flex items-center justify-center h-24 rounded shadow cursor-pointer";
  card.dataset.symbol = symbol; //*  الاشكال من الامام
  card.textContent = "❓"; //* الاشكال من الخلف 

  card.addEventListener("click", () => {//* التعامل مع الكارت
    if (lock || flipped.includes(card) || card.classList.contains("matched")) return; //* التحقق من الحالة
    startTimer();
    
    const attemptsElement = document.getElementById("attempts");
    attemptsElement.innerText = `attempts: ${attempts}`;
    card.textContent = symbol; 
    flipped.push(card);

    if (flipped.length === 2) {
      attempts++;
      lock = true;
      const [a, b] = flipped; //* الكارت الاول والثاني
      if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.add("matched", "bg-green-200"); //* الحصول على النتيجة
        b.classList.add("matched", "bg-green-200");
        a.classList.remove("bg-slate-200");
        b.classList.remove("bg-slate-200"); 
        flipped = [];
        lock = false;
        const allmatched = document.querySelectorAll(".matched");
        if (allmatched.length === cards.length) {
          stopTimer();
          const restart = document.getElementById("restart");
          const congrats = document.getElementById("Congrats");
          congrats.classList.remove("hidden");
          restart.classList.remove("hidden");
          if(attempts < 10){
            congrats.innerText = `congrats you win with ${attempts} attempts`
          }
          else if(attempts < 20){
            congrats.innerText = `Good you win with ${attempts} attempts`
          }
          else{
            congrats.innerText = `very bad but you win with ${attempts} attempts`
          }
        }
      } else {
        setTimeout(() => {
          a.classList.remove("bg-slate-200");
          b.classList.remove("bg-slate-200");
          a.classList.add("shake","bg-red-200");
          b.classList.add("shake","bg-red-200");
          
        });
        setTimeout(() => {
          
          a.classList.add("bg-slate-200");
          b.classList.add("bg-slate-200");
          a.classList.remove("bg-red-200");
          b.classList.remove("bg-red-200");
          a.classList.remove("shake")
          b.classList.remove("shake")
          a.textContent = "❓";
          b.textContent = "❓";
          flipped = [];
          lock = false;
        }, 1000);
      }
    }
  });

  board.appendChild(card);
});


function restart() {
  window.location.reload();
}




