import { getmyTask } from './interface.js';
import { ls, setTask } from './local-storage.js';

// Start

const changeTaskStatus = ({ index, status }) => {
  const myTask = ls();
  myTask[index - 1].completed = status;
  setTask(myTask);
  getmyTask();
};

const removeCompletedTasks = () => {
  const myTask = ls();
  const uncompletedTasks = myTask.filter(({ completed }) => completed !== true);
  const newTodos = uncompletedTasks.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  setTask(newTodos);
  getmyTask();
};

export { changeTaskStatus, removeCompletedTasks };
