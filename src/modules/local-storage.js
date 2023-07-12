const ls = () => {
  const tasks = localStorage.getItem('myTask')
    ? JSON.parse(localStorage.getItem('myTask')) : [];
  return tasks;
};

const setTask = (ml) => {
  localStorage.setItem('myTask', JSON.stringify(ml));
};

export { ls, setTask };