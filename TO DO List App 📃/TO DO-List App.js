const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add('task-item', 'flex', 'items-center', 'bg-gray-100', 'p-2', 'mb-1', 'rounded-lg');
        const delBtn = document.createElement('button');
        delBtn.innerText = 'DEL';
        delBtn.classList.add('delete-btn', 'ml-auto', 'bg-gray-100', 'text-red-500', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-red-500', 'hover:text-white', 'text-center', 'text-lg');
        taskItem.appendChild(delBtn);
        delBtn.addEventListener('click', () => {
            taskItem.remove();
            
        });
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.classList.add("check-btn")
        check.addEventListener('change', () => {
            if (check.checked) {
                taskItem.classList.remove('bg-gray-100');
                taskItem.classList.add('bg-green-200');
            } else {
                taskItem.classList.add('bg-gray-100');
                taskItem.classList.remove('bg-green-200');
            }
        });
        taskItem.appendChild(check);
        check.className = 'mx-2 h-6 w-6 bg-gray-100 rounded-lg';

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
    //local storage
    
});
