const ls = () => (JSON.parse(localStorage.getItem('myTask'))
  ? JSON.parse(localStorage.getItem('myTask')) : []);

const setTask = (ml) => {
  localStorage.setItem('myTask', JSON.stringify(ml));
};

export { ls, setTask };