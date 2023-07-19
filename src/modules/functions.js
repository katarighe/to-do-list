import { getmyTask } from './user-interface.js';
import { ls, setTask } from './local-storage.js';

const addmyTask = (event) => {
  const myTask = ls();
  const taskGroup = document.querySelector('.to-do-add');
  const newTask = taskGroup.querySelector('input');
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const todoElement = {
      description: newTask.value,
      completed: false,
      index: myTask.length + 1,
    };

    newTask.value = '';
    myTask.push(todoElement);
    setTask(myTask);
    getmyTask();
  }
};

const editmyTask = ({ index, event }) => {
  const myTask = ls();
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    myTask[index - 1].description = event.target.value;
    setTask(myTask);
  }
};

const deletemyTask = (targetIndex) => {
  const myTask = ls();
  const filterTask = myTask.filter(({ index }) => index !== parseInt(targetIndex));
  const newmyTask = filterTask.map((item, i) => {
    item.index = i + 1;
    return item;
  });
  setTask(newmyTask);
  getmyTask();
};

export {
  addmyTask,
  // Line break here
  editmyTask,
  deletemyTask,
};