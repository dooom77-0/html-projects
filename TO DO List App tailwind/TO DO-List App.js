// تحديد العناصر من الصفحة
const input = document.getElementById("input-box");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// عند الضغط على زر الإضافة
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim(); // إزالة الفراغات

  if (taskText === "") return; // تجاهل إذا الحقل فاضي

  // إنشاء عنصر المهمة
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md shadow-sm mb-2";

  // نص المهمة
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-800 flex-grow rounded-md";

  // زر الحذف
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.className = "hover:bg-red-700 text-white font-bold px-1 py-1 rounded-md";

  // حذف المهمة عند الضغط
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'w-6 h-6 text-purple-600 bg-gray-200 border-gray-300 rounded-md focus:ring-purple-500 ml-5';

  checkbox.addEventListener('click',() =>{
    span.classList.toggle('line-through');
    span.classList.toggle('text-black');
  });

  // تركيب العناصر داخل المهمة
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkbox);
  taskList.appendChild(li);

  // مسح الحقل بعد الإضافة
  input.value = "";
});
