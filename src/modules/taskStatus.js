import {
  myTask,
  getmyTask,
  updateInterface
} from './functions.js';

const changeTaskStatus = ({ index, status }) => {
  myTask[index - 1].completed = status;
  localStorage.setItem('myTask', JSON.stringify(myTask));
  getmyTask();
};

const removeCompletedTasks = () => {
  const uncompletedTasks = myTask.filter((task) => task.completed !== true);
  const newTasks = uncompletedTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });

  localStorage.setItem('myTask', JSON.stringify(newTasks));
  updateInterface(newTasks);
};

export {
  changeTaskStatus,
  removeCompletedTasks,
};