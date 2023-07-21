import { editmyTask } from '../src/modules/functions.js';

import { ls, setTask } from '../src/modules/local-storage.js';

import { changeTaskStatus, removeCompletedTasks } from '../src/modules/taskStatus.js';

jest.mock('../src/modules/user-interface.js');

// Purpose for the order reposition of items in the list
const editableStorage = [
  {
    index: 1,
    description: 'test',
    completed: false,
  },
  {
    index: 2,
    description: 'test2',
    completed: false,
  },
  {
    index: 3,
    description: 'test3',
    completed: false,
  },
];

describe('Edit Completed Task', () => {
  // Start (Edit Task function)
  test('Editing Completed Tasks', () => {
    // Arrange
    const inputObject = {
      index: 2,
      event: {
        key: 'Enter',
        target: {
          value: 'update the item',
        },
      },
    };
    setTask(editableStorage);

    // Act
    editmyTask(inputObject);
    const editedTask = ls();

    // Assert
    expect(editedTask[inputObject.index - 1].description).toBe('update the item');
  });
});

// Start (Complete Task function)
describe('Completed Task Description', () => {
  test('Update the Completed Tasks', () => {
    // Arrange
    const setUp = {
      index: 3,
      status: true,
    };
    // Act
    changeTaskStatus(setUp);
    const newLS = ls();
    // Assert
    expect(newLS[setUp.index - 1].completed).toBeTruthy();
  });
  test('Remove Completed Tasks', () => {
    // Act
    removeCompletedTasks();
    const newLS = ls();
    // Assert
    expect(newLS.length).toBeLessThan(editableStorage.length);
  });
});