import { addmyTask, deletemyTask } from '../src/modules/functions.js';
jest.mock('../src/modules/user-interface.js');

describe('Add and remove testing', () => {
  // Start for Add Item
  test('Add testing', () => {
    // Arrange the elements
    document.body.innerHTML = '<div class="to-do-list to-do-add">'
    + '<input type="text" placeholder="Add to your list..." value="new task">'
    + '<i class="fa-solid fa-plus add-icon" value="add task"></i>'
    + '</div>';

    const myTask = JSON.parse(localStorage.getItem('myTask')) || [];

    // Act the Add Task
    addmyTask('clicked');
    const newTask = JSON.parse(localStorage.getItem('myTask'));
    const newTaskLength = newTask.length;

    // Assert the Add Task
    expect(newTaskLength).toBe(myTask.length + 1);
    expect(newTask[newTaskLength - 1].description).toBe('new task');
  });

  // Start for Remove Items
  test('Removing item', () => {
    // Arrange the lines
    const myTask = JSON.parse(localStorage.getItem('myTask'));

    // Act the Remove task
    deletemyTask(1);
    const newTask = JSON.parse(localStorage.getItem('myTask'));

    // Assert the Remove task
    expect(newTask.length).toBe(myTask.length - 1);
  });
});