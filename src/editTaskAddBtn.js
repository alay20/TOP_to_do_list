import { allTasks, allTasksCounters } from "./data";
import { editTaskDateInput, editTaskNameInput, editTaskNotesInput } from "./utils"
import checkBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';
import star from './icons/star.svg';
import filledStar from './icons/important-star.svg';
import menu from './icons/dots-vertical.svg';
import { format, parseISO } from 'date-fns';

export const addEditTask = () => {
    //Edit selected task object inside alltask object
    const contEditTask = document.querySelector('.add-task-form-cont.edit-task');
    const originalTaskNameUnique = contEditTask.dataset.taskTitle; 
    const editUniqueTitle = editTaskNameInput.value.trim().toLowerCase();

    console.log('this is the property of the object of the task being edited:', originalTaskNameUnique);
    console.log('new input in task title:', editTaskNameInput.value);
      
      if (allTasks.hasOwnProperty(editUniqueTitle)) {
        allTasks[originalTaskNameUnique].setTaskNotes(editTaskNotesInput.value);
        allTasks[originalTaskNameUnique].setTaskDueDate(editTaskDateInput.value);
        console.log('task edited!');
        } else {
            if(allTasks[originalTaskNameUnique]) {
                allTasks[originalTaskNameUnique].setTaskTitle(editTaskNameInput.value);
                allTasks[originalTaskNameUnique].setTaskUniqueTitle(editUniqueTitle);
                allTasks[originalTaskNameUnique].setTaskNotes(editTaskNotesInput.value);
                allTasks[originalTaskNameUnique].setTaskDueDate(editTaskDateInput.value);
            }            

            allTasks[editUniqueTitle] = allTasks[originalTaskNameUnique];
            delete allTasks[originalTaskNameUnique];
            
            allTasksCounters[editUniqueTitle] = 1;
            
            if (allTasksCounters[originalTaskNameUnique] === 1) {
              delete allTasksCounters[originalTaskNameUnique];
            } else {
              allTasksCounters[originalTaskNameUnique] -= 1;
            }
            console.log('You changed the task title!');
            };
    
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