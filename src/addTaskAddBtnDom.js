import { enterTaskNameInput,  addTaskInputCont, enterTaskNotesInput, enterTaskDateInput, taskList, lastClickedProject, openAddTaskBtnCont } from "./utils";
import checkBox from './icons/checkbox-blank-outline.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';
import { filterTasksLastClickedProject } from "./filterTasksLastClickedProject";

export const addTaskToList = () => {
    
    addTaskInputCont.remove(); 
    
    const tasksFilteredClickedProjectObj = filterTasksLastClickedProject();

    const newTaskLi = document.createElement('li');

    const taskCheckbox = new Image();
    taskCheckbox.src = checkBox;
    taskCheckbox.classList.add('icons');
    taskCheckbox.classList.add('task-checkbox');

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = enterTaskNameInput.value;
    console.log('Text in task name input box:', enterTaskNameInput.value);
    

    const taskDueDateDiv = document.createElement('div');

        //Determine text output for due date element
        if (enterTaskDateInput.value === '') {
            taskDueDateDiv.textContent = 'No Due Date'
        } else {
            taskDueDateDiv.textContent = enterTaskDateInput.value;
        }


    const starImportant = new Image();
    starImportant.src = star;
    starImportant.classList.add('icons');

    const taskMenuIcon = new Image();
    taskMenuIcon.src = menu;
    taskMenuIcon.classList.add('icons');

    newTaskLi.append(taskCheckbox, taskText, taskDueDateDiv, starImportant, taskMenuIcon);
        
    openAddTaskBtnCont.insertAdjacentElement('beforebegin', taskList);
    taskList.appendChild(newTaskLi);

    enterTaskNameInput.value = "";
    // enterTaskNotesInput = "";
    enterTaskDateInput.value = "";

};
