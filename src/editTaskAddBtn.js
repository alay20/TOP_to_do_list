import { allTasks, allTasksCounters } from "./data";
import { editTaskDateInput, editTaskNameInput, editTaskNotesInput } from "./utils"
import checkBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';
import star from './icons/star.svg';
import filledStar from './icons/important-star.svg';
import menu from './icons/dots-vertical.svg';
import { format, parseISO } from 'date-fns';
import { createTask } from "./addTaskFactoryFunction";

export const addEditTask = () => {
    //Edit selected task object inside alltask object
    const contEditTask = document.querySelector('.add-task-form-cont.edit-task');
    const originalTaskUniqueTitle = contEditTask.dataset.taskTitle; 
    const allTasksCountersKey = originalTaskUniqueTitle.split("_")[0]; 
    const editUniqueTitle = editTaskNameInput.value.trim().toLowerCase();

    console.log('this is the property of the object of the task being edited:', originalTaskUniqueTitle);
    console.log('new input in task title:', editTaskNameInput.value);
    
    //Retrieve localStorage
    let storedAllTasksCounters = JSON.parse(localStorage.getItem('allTasksCounters'));
    let storedAllTasks = JSON.parse(localStorage.getItem('allTasks')) || {};
    
    storedAllTasks[originalTaskUniqueTitle] = createTask(
      storedAllTasks[originalTaskUniqueTitle].title,
      storedAllTasks[originalTaskUniqueTitle].uniqueTitle,
      storedAllTasks[originalTaskUniqueTitle].notes,
      storedAllTasks[originalTaskUniqueTitle].complete,
      storedAllTasks[originalTaskUniqueTitle].dueDate,
      storedAllTasks[originalTaskUniqueTitle].taskProject,
      storedAllTasks[originalTaskUniqueTitle].isImportant
      );
    
    

    if (allTasks.hasOwnProperty(editUniqueTitle)) {
      allTasks[originalTaskUniqueTitle].setTaskNotes(editTaskNotesInput.value);
      allTasks[originalTaskUniqueTitle].setTaskDueDate(editTaskDateInput.value);
      storedAllTasks[originalTaskUniqueTitle].setTaskNotes(editTaskNotesInput.value);
      storedAllTasks[originalTaskUniqueTitle].setTaskDueDate(editTaskDateInput.value);
      
      console.log('task edited!');
    
      } else {
          if(allTasks[originalTaskUniqueTitle]) {
              allTasks[originalTaskUniqueTitle].setTaskTitle(editTaskNameInput.value);
              allTasks[originalTaskUniqueTitle].setTaskUniqueTitle(editUniqueTitle);
              allTasks[originalTaskUniqueTitle].setTaskNotes(editTaskNotesInput.value);
              allTasks[originalTaskUniqueTitle].setTaskDueDate(editTaskDateInput.value);
              storedAllTasks[originalTaskUniqueTitle].setTaskTitle(editTaskNameInput.value);
              storedAllTasks[originalTaskUniqueTitle].setTaskUniqueTitle(editUniqueTitle);
              storedAllTasks[originalTaskUniqueTitle].setTaskNotes(editTaskNotesInput.value);
              storedAllTasks[originalTaskUniqueTitle].setTaskDueDate(editTaskDateInput.value);
          }            

          
          allTasks[editUniqueTitle] = allTasks[originalTaskUniqueTitle];
          delete allTasks[originalTaskUniqueTitle];

          
          //update localStorage
          storedAllTasks[editUniqueTitle] = storedAllTasks[originalTaskUniqueTitle];
          delete storedAllTasks[originalTaskUniqueTitle];
          
          //update allTasksCounters and localStorage allTasksCounters
          
          allTasksCounters[editUniqueTitle] = 1;
          allTasksCounters[allTasksCountersKey] -= 1;
          storedAllTasksCounters[editUniqueTitle] = 1;
          storedAllTasksCounters[allTasksCountersKey] -=1;

          console.log('You changed the task title!');
          };

    //Save to localStorage
    localStorage.setItem('allTasks', JSON.stringify(storedAllTasks));
    localStorage.setItem('allTasksCounters', JSON.stringify(storedAllTasksCounters));
    



    //Add edited task and details to DOM

    const newTaskLi = document.createElement('li');
    newTaskLi.classList.add('new-task-li');
    newTaskLi.dataset.taskTitle = editUniqueTitle;
    

    const taskCheckbox = new Image();
    if (allTasks[editUniqueTitle].getTaskComplete()) {
      taskCheckbox.src = checkedBox  
    } else {
      taskCheckbox.src = checkBox;
    }
    taskCheckbox.classList.add('icons');
    taskCheckbox.classList.add('task-checkbox');

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = editTaskNameInput.value;

    const taskNotes = document.createElement('p');
    taskNotes.classList.add('task-notes');
    taskNotes.textContent = allTasks[editUniqueTitle].getTaskNotes(); 
        

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');

    //Determine text output for due date element
        if (allTasks[editUniqueTitle].getTaskDueDate() === "") {
            taskDueDate.textContent = 'No Due Date'
        } else {
            const dateToFormat = parseISO(allTasks[editUniqueTitle].getTaskDueDate());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            dateToFormat.setHours(0, 0, 0, 0);
                if (dateToFormat.getTime() === today.getTime()) {
                    taskDueDate.textContent = 'Today';
                } else {
                    taskDueDate.textContent = format(dateToFormat, 'EEE, MMM d, yyyy');
                };
        };

        const taskImportant = new Image();
        if (allTasks[editUniqueTitle].getImportant()) {
          taskImportant.src = filledStar;
        } else
          taskImportant.src = star;
        taskImportant.classList.add('icons', 'task-star');
        
        const taskMenuIcon = new Image();
        taskMenuIcon.src = menu;
        taskMenuIcon.classList.add('icons');
        taskMenuIcon.classList.add('task-menu');

        newTaskLi.append(taskCheckbox, taskText, taskNotes, taskDueDate, taskImportant, taskMenuIcon);
        
        contEditTask.replaceWith(newTaskLi);
    
}