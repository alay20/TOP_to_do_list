import { addTaskInputCont, enterTaskNameInput, enterTaskNotesInput, enterTaskDateInput, taskList, openAddTaskBtnCont } from "./utils";
import checkBox from './icons/checkbox-blank-outline.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';

export const addTaskToList = () => {
    
    addTaskInputCont.remove(); 

    const newTaskLi = document.createElement('li');
    newTaskLi.classList.add('new-task-li');
    newTaskLi.dataset.taskTitle = enterTaskNameInput.value;

    const taskCheckbox = new Image();
    taskCheckbox.src = checkBox;
    taskCheckbox.classList.add('icons');
    taskCheckbox.classList.add('task-checkbox');

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = enterTaskNameInput.value;
    console.log('Text in task name input box:', enterTaskNameInput.value);

    const taskNotes = document.createElement('p');
    taskNotes.classList.add('task-notes');
    taskNotes.textContent = enterTaskNotesInput.value;
    

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');

        //Determine text output for due date element
        if (enterTaskDateInput.value === '') {
            taskDueDate.textContent = 'No Due Date'
        } else {
            taskDueDate.textContent = enterTaskDateInput.value;
        }

    
    const starOutline = new Image();
    starOutline.src = star;
    starOutline.classList.add('icons', 'task-star');
    

    const taskMenuIcon = new Image();
    taskMenuIcon.src = menu;
    taskMenuIcon.classList.add('icons');
    taskMenuIcon.classList.add('task-menu');

    newTaskLi.append(taskCheckbox, taskText, taskNotes, taskDueDate, starOutline, taskMenuIcon);

  
        
    openAddTaskBtnCont.insertAdjacentElement('beforebegin', taskList);
    taskList.appendChild(newTaskLi);

    enterTaskNameInput.value = "";
    enterTaskNotesInput.value = "";
    enterTaskDateInput.value = "";

};

//Insert star with inline svg next to the original clicked star
// clickedStar.insertAdjacentHTML('afterend', filledStar);

// const importantStar = clickedStar.nextElementSibling;
// importantStar.classList.add('task-star-important');

// clickedStar.remove();




  //add star as inline svg
    // taskDueDate.insertAdjacentHTML('afterend', importantStar);    
    // const star = taskDueDate.nextElementSibling;
    // star.classList.add('icon', 'task-star');