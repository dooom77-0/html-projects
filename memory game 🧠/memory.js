const symbols = ["🐱", "🐶", "🐼", "🦊", "🐸", "🐵","🐨","🐽"]; //*الاشكال 
let cards = [...symbols, ...symbols]; //* التكرار
cards.sort(() => Math.random() - 0.5); //* الترتيب  

const board = document.getElementById("board"); //* القائمة
let flipped = [];
let lock = false;

cards.forEach(symbol => { //* الكلمات
  const card = document.createElement("div"); //* الكارت
  card.className = "cards bg-slate-200 text-3xl flex items-center justify-center h-24 rounded shadow cursor-pointer";
  card.dataset.symbol = symbol; //*  الاشكال من الامام
  card.textContent = "❓"; //* الاشكال من الخلف 

  card.addEventListener("click", () => {//* التعامل مع الكارت
    card.classList.add("flip")
    if (lock || flipped.includes(card) || card.classList.contains("matched")) return; //* التحقق من الحالة

    card.textContent = symbol; 
    flipped.push(card);

    if (flipped.length === 2) {
      lock = true;
      const [a, b] = flipped;
      if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.add("matched", "bg-green-200"); //* الحصول على النتيجة
        b.classList.add("matched", "bg-green-200");
        a.classList.remove("bg-slate-200");
        b.classList.remove("bg-slate-200");
        flipped = [];
        lock = false;
        const allmatched = document.querySelectorAll(".matched");
        if (allmatched.length === cards.length) {
          const restart = document.getElementById("restart");
          const congrats = document.getElementById("Congrats");
          congrats.innerText = "You won, congrats!🎉🎉";
          restart.classList.remove("hidden");
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




