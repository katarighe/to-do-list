import './style.css';

const mytask = [
    {
        description: "Buy groceries",
        completed: false,
        index: 1
    },
    {
        description: "Clean the house",
        completed: false,
        index: 2
    },
    {
        description: "Go to the gym",
        completed: false,
        index: 3
    },
    {
        description: "Make some breakfast",
        completed: false,
        index: 4
    },
    {
        description: "Wash the car",
        completed: false,
        index: 5
    }
];

const getMyTask = () => {
    const listGroup = document.querySelector('.to-do-group');
    mytask.map((item => {
      const listElement = document.createElement('li');
      listElement.classList = 'to-do-list to-do-item';
      listElement.id = `${item.index}`;
      listElement.innerHTML = `
        <button type="button" class="
          ${item.completed === true ? 'check-button' : 'uncheck-button'}
        ">
          <i class="fa-solid fa-check"></i>
        </button>
        <input type="text" class="
          ${item.completed === true ? 'decorate' : 'undecorate'}
        " value="${item.description}">
        <span class="to-do-item-more"><i class="fa-solid fa-ellipsis-vertical"></i></span>
      `;
      listGroup.appendChild(listElement);
    }));
  };

window.addEventListener('load', getmytask);