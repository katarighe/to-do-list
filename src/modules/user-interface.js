import {
  ls
} from './local-storage.js';

const getmyTask = () => {
  const myTask = ls();
  const myTaskElement = myTask.map((item) => `
        <li class="to-do-list to-do-item" id=${item.index}>
          ${item.completed === true ? `
            <i class="fa-solid fa-square-check check-icon" title="Mark task as incomplete"></i>`
    : '<i class="fa-solid fa-square uncheck-icon" title="Mark task as complete"></i>'}
          <input type="text" class=${item.completed === true ? 'decoration edit-to-do' : ' edit-to-do'} value="${item.description}" title="Edit this task">
          <span class='edit-focus-element'></span>
          <i class="fa-solid fa-trash delete-icon" title='Remove a task'></i>
          <i class="fa-solid fa-ellipsis-vertical more-icon" title='See more'></i>
        </li>`).join('');
  return document.querySelector('.to-do-group').innerHTML = myTaskElement;
};

export { getmyTask };