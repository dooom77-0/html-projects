const mainBtn = document.getElementById('main-btn');
mainBtn.addEventListener('click', () => {
  window.open('https://github.com/dooom77-0/py-projects/tree/main/%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86','_blank')
});

const mainBtn2 = document.getElementById('main-btn-2');
mainBtn2.addEventListener('click', () => {
  window.open('https://github.com/dooom77-0/html-projects','_blank')
});

function Suggest() {
  alert('Note: This is my first project in html , css and javascript!')

  let suggestion = prompt("Give me your suggestions for the site :");

  if (suggestion && suggestion.trim() !== "") {
    // جلب الآراء القديمة من التخزين
    let oldSuggestions = JSON.parse(localStorage.getItem('user-suggestions')) || [];

    // إضافة الرأي الجديد
    oldSuggestions.push(suggestion);

    // حفظ المصفوفة بعد تحويلها إلى JSON
    localStorage.setItem('user-suggestions', JSON.stringify(oldSuggestions));

    document.getElementById('su-btn1').style.display = 'none'

    // عرض رسالة الشكر
    document.getElementById('feedback').innerText = 'Thanks for your suggestions';
    
  } 
  else {
    document.getElementById('feedback').innerText = "No suggestions have been entered.";
    document.getElementById('su-btn1').style.display = 'none';
  }
}

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  

  // إذا القائمة مفتوحة، نحط ✖
  if (navLinks.classList.contains("show")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});