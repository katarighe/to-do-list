import {
  getmyTask
} from './user-interface.js';

import {
  ls,
  setTask
} from './local-storage.js';

const changeTaskStatus = ({ index, status }) => {
  const myTask = ls();
  myTask[index - 1].completed = status;
  setTask(myTask);
  getmyTask();
};

const removeCompletedTasks = () => {
  const myTask = ls();
  const uncompletedTasks = myTask.filter(({ completed }) => completed !== true);
  const newTasks = uncompletedTasks.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  setTask(newTasks);
  getmyTask();
};

export {
  changeTaskStatus,
  removeCompletedTasks
};