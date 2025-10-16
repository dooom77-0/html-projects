const symbols = ["🐱", "🐶", "🐼", "🦊", "🐸", "🐵","🐨","🐽"]; //*الاشكال 
let cards = [...symbols, ...symbols]; //* التكرار
cards.sort(() => Math.random() - 0.5); //* الترتيب  

const board = document.getElementById("board"); //* القائمة
let flipped = [];
let lock = false;

cards.forEach(symbol => { //* الكلمات
  const card = document.createElement("div"); //* الكارت
  card.className = "card bg-slate-200 text-3xl flex items-center justify-center h-24 rounded shadow cursor-pointer";
  card.dataset.symbol = symbol; //* الاشكال
  card.textContent = "❓"; //* الاشكال

  card.addEventListener("click", () => { //* التعامل مع الكارت
    if (lock || flipped.includes(card) || card.classList.contains("matched")) return; //* التحقق من الحالة

    card.textContent = symbol; 
    flipped.push(card);

    if (flipped.length === 2) {
      lock = true;
      const [a, b] = flipped;
      if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.add("matched"); //* الحصول على النتيجة
        b.classList.add("matched");
        flipped = [];
        lock = false;
      } else {
        setTimeout(() => {
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

const restart = document.getElementById("restart");

const allmatched = document.querySelectorAll(".card.matched").length === cards.length;

if (allmatched) {
  restart.classList.remove("hidden");
}

restart.addEventListener("click", () => {
  location.reload();
});


