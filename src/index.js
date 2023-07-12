import './style.css';

import {
  getmyTask,
  // Line break here.
  addmyTask,
  editmyTask,
  deletemyTask,
} from './modules/functions.js';

const listGroup = document.querySelector('.to-do-group');
const newTask = document.querySelector('.to-do-add').querySelector('input');
const submitIcon = document.querySelector('.to-do-add').querySelector('i');
newTask.addEventListener('keypress', (event) => addmyTask(event));
submitIcon.addEventListener('click', () => addmyTask('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deletemyTask(li.id);
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-to-do') editmyTask({ index: li.id, event });
});

window.addEventListener('load', () => { getmyTask(); });