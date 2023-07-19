import { addmyTask, deletemyTask } from '../src/modules/functions.js';

jest.mock('../src/modules/user-interface.js');

describe('Test Add and Remove Features of the To Do List', () => {
  // Start
  test('Test the Add (+) feature', () => {
    // Arrange (Add)
    document.body.innerHTML = '<div class="to-do-list to-do-add">'
    + '<input type="text" placeholder="Add to your list..." value="new task">'
    + '<i class="fa-solid fa-plus add-icon" value="add task"></i>'
    + '</div>';

    const myTask = JSON.parse(localStorage.getItem('myTask')) || [];

    // Act
    addmyTask('clicked');
    const newTask = JSON.parse(localStorage.getItem('myTask'));
    const newTaskLength = newTask.length;

    // Assert
    expect(newTaskLength).toBe(myTask.length + 1);
    expect(newTask[newTaskLength - 1].description).toBe('new task');
  });

  // Start (Remove)
  test('Test the Remove (-) feature', () => {
    // Arrange
    const myTask = JSON.parse(localStorage.getItem('myTask'));

    // Act
    deletemyTask(1);
    const newTask = JSON.parse(localStorage.getItem('myTask'));

    // Assert
    expect(newTask.length).toBe(myTask.length - 1);
  });
});