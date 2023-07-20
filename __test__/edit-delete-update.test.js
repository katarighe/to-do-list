import { editmyTask } from '../src/modules/functions.js';

import { ls, setmyTask } from '../src/modules/local-storage.js';

import { changeTaskStatus, removeCompletedTasks } from '../src/modules/taskStatus.js';

jest.mock('../src/modules/user-interface.js');

// Purpose for the order reposition of items in the list
const editableStorage = [
  {
    index: 1,
    description: 'This is Test 1',
    completed: false,
  },
  {
    index: 2,
    description: 'This is Test 2',
    completed: false,
  },
  {
    index: 3,
    description: 'This is Test 3',
    completed: false,
  },
];

// Start (Edit Task function)


// Start (Complete Task function)