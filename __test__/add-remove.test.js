import {
  addmyTask,
  deletemyTask
} from '../src/modules/functions.js';

jest.mock('../src/modules/inteface.js');

describe('Add and remove testing',() => {
    test('Add testing', () => {
        // Arrange the elements
        document.body.innerHTML = '<div class="to-do-list to-do-add">'
        + '<input type="text" placeholder="Add to your list..." value="new task">'
        + '<i class="fa-solid fa-plus add-icon" value="add task"></i>'
        + '</div>';

        const myTask = JSON.parse(localStorage.getItem('myTask'));

        // Act the Add Task
        addmyTask ('clicked');
        const newTask = JSON.parse(localStorage.getItem('myTask'));
        const newTaskLength = newTaskLength; 

        // Assert the Add Task
        expect(newTaskLength).toBe(myTask.length + 1);
        expect(newTask[newTaskLength - 1].description).toBe('new task');
    });



    
});