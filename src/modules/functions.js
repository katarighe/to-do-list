import { getmyTask } from './interface.js';

import { ls, setmyTask } from './local-storage.js'

// Start
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
        setList(myTask);
        getmyTask();
    }
};

const editmyTask = ({ index, event }) => {
    const myTask = ls();
    if (event.target.value === '') return;
    if (event.key === 'Enter') {
      myTask[index - 1].description = event.target.value;
      setList(myTask);
    }
  };

const deletemyTask = (targetIndex) => {
    const myTask = ls();
    const filterList = myTask.filter(({ index }) => index !== parseInt(targetIndex));
    const newmyTask = filterTask.map((item, i) => {
      item.index = i + 1;
      return item;
    });
    myTask(newmyTask);
    getmyTask();
  };

export { addmyTask, editmyTask, deletemyTask, };