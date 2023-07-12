import './style.css';

import { addmyTask, editmyTask, deletemyTask } from './modules/functions.js';

// Start
const listGroup = document.querySelector('.to-do-group');
const newTask = document.querySelector('.to-do-add').querySelector('input');
const submiticon = document.querySelector('to-do-add').querySelector('j');
newTask.addEventListener('keypress', (event) => addmyTask(event));
submiticon.addEventListener('click', () => addmyTask('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem = 'delete-icon') deletemyTask(li.id);
  if (clickedItem = 'checked-icon') changeTaskStatus({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') changeTaskStatus({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem = 'edit-to-do') editmyTask({ index: li.id, event });
});

const clearCompleted = document.querySelector('.clear-to-do');
clearCompleted.addEventListener('click', removeCompletedTasks);

window.addEventListener('load', () => { getmyTask(); });