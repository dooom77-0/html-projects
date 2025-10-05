// عناصر HTML
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// متغيرات لحفظ القيم
let currentInput = "";
let previousInput = "";
let operator = "";

// التعامل مع كل زر
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      clearAll();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculate();
    } else if (["+", "-", "*", "/", "%"].includes(value)) {
      setOperator(value);
    } else {
      appendNumber(value);
    }
  });
});

// دالة لإضافة رقم للشاشة
function appendNumber(num) {
  currentInput += num;

  if (operator === "") {
    display.value = currentInput;
  } else {
    display.value = previousInput + " " + operator + " " + currentInput;
  }
}


// دالة لتحديد العملية
function setOperator(op) {
  if (currentInput === "") return;

  operator = op;
  previousInput = currentInput;
  currentInput = "";

  display.value = previousInput + " " + operator + " ";
}


// دالة للحساب
function calculate() {
  if (previousInput === "" || currentInput === "") return;

  let result;
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "خطأ";
      break;
    case "%":
      result = a % b;
      break;
    default:
      result = "؟";
  }

  display.value = result;
  currentInput = result.toString();
  previousInput = "";
  operator = "";
}

// دالة لمسح الكل
function clearAll() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
}

// دالة لحذف آخر رقم
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
