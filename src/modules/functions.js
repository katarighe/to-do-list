let myTask = JSON.parse(localStorage.getItem('myTask')) || [];

const taskGroup = document.querySelector('.to-do-group');
const newTask = document.querySelector('.to-do-add').querySelector('input');

const getmyTask = () => {
  const myTaskElement = myTask
    .map(
      (item) => `
  <li class='to-do-list to-do-item' id=${item.index}>
  ${
  item.completed === true
    ? `
  <i class="fa-solid fa-check checked-icon"></i>`
    : '<i class="fa-solid fa-square unchecked-icon"></i>'
}
      <input type="text" class=${
  item.completed === true ? 'decoration edit-to-do' : 'edit-to-do'
}  value='${item.description}'>
          <span class='edit-focus-element'></span>
          <i class='fa-solid fa-trash-can delete-icon'></i>
          <i class='fa-solid fa-ellipsis-vertical more-icon'></i>
        </li>`
    )
    .join('');
  taskGroup.innerHTML = myTaskElement;
  return taskGroup;
};

const updateUI = (data) => {
  myTask = data;
  getmyTask();
}

const addmyTask = (event) => {
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const myTaskElement = {
      description: newTask.value,
      completed: false,
      index: myTask.length + 1,
    };
    newTask.value = '';
    myTask = [...myTask, myTaskElement];
    localStorage.setItem('myTask', JSON.stringify(myTask));
    getmyTask();
  }
};

const editmyTask = ({ index, event }) => {
  if (event.target.value === '') return;
  event.target.addEventListener('blur', () => {
    myTask[index - 1].description = event.target.value;
    localStorage.setItem('myTask', JSON.stringify(myTask));
  });
};

const deletemyTask = (targetIndex) => {
  const filterTask = myTask.filter((task) => +task.index !== +targetIndex);
  const newmyTask = filterTask.map((task, index) => ({
    description: task.description,
    completed: task.completed,
    index: index + 1,
  }));
  localStorage.setItem('myTask', JSON.stringify(newmyTask));
  myTask = newmyTask;
  getmyTask();
};

export {
  getmyTask,
  // Line break here.
  addmyTask,
  editmyTask,
  deletemyTask,
  myTask,
  updateUI,
};