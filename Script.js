function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerText = taskText + (taskDate ? ` — ${new Date(taskDate).toLocaleString()}` : '');

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.innerText = '✔';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.innerText = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt('Edit your task:', taskText);
    if (newTask !== null && newTask.trim() !== '') {
      span.innerText = newTask + (taskDate ? ` — ${new Date(taskDate).toLocaleString()}` : '');
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
}
