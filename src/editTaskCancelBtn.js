import emptyBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';
import star from './icons/star.svg';
import filledStar from './icons/important-star.svg';
import menu from './icons/dots-vertical.svg';
import { format, parseISO } from 'date-fns';
import { allTasks } from './data';
import { taskList } from './utils';

export const cancelEditTask = (e) => {
    const taskEditCont = e.target.closest('.add-task-form-cont')
    const taskEdit = e.target.closest('.add-task-form-cont').dataset.taskTitle;
    
    const editedTaskLi = document.createElement('li');
    editedTaskLi.classList.add('new-task-li');
    editedTaskLi.dataset.taskTitle = taskEdit;

    //Determine if task complete
    let checkboxToDisplay;
    if (allTasks[taskEdit].getTaskComplete()) {
        const taskChecked = new Image();
        taskChecked.src = checkedBox;
        taskChecked.classList.add('icons');
        taskChecked.classList.add('task-checkbox');
        checkboxToDisplay = taskChecked;
    } else {
        const taskNotChecked = new Image();
        taskNotChecked.src = emptyBox;
        taskNotChecked.classList.add('icons');
        taskNotChecked.classList.add('task-checkbox');
        checkboxToDisplay = taskNotChecked;
    }

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = allTasks[taskEdit].getTaskTitleAsEntered();
    
    const taskNotes = document.createElement('p');
    taskNotes.classList.add('task-notes');
    taskNotes.textContent = allTasks[taskEdit].getTaskNotes();

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');
    //Determine text output for due date element
        if (allTasks[taskEdit].getTaskDueDate() === "") {
            taskDueDate.textContent = 'No Due Date'
        } else {
            const dateToFormat = parseISO(allTasks[taskEdit].getTaskDueDate());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            dateToFormat.setHours(0, 0, 0, 0);
                if (dateToFormat.getTime() === today.getTime()) {
                    taskDueDate.textContent = 'Today';
                } else {
                    taskDueDate.textContent = format(dateToFormat, 'EEE, MMM d, yyyy');
                };
        };

    //Determine if task starred
        let starToDisplay;
        if (allTasks[taskEdit].getImportant()) {
            const yellowStar = new Image();
            yellowStar.src = filledStar;
            yellowStar.classList.add('icons', 'task-star');
            starToDisplay = yellowStar;
        } else {
            const starOutline = new Image();
            starOutline.src = star;
            starOutline.classList.add('icons', 'task-star');        
            starToDisplay = starOutline;
        }

    const taskMenuIcon = new Image();
    taskMenuIcon.src = menu;
    taskMenuIcon.classList.add('icons');
    taskMenuIcon.classList.add('task-menu');

    editedTaskLi.append(checkboxToDisplay, taskText, taskNotes, taskDueDate, starToDisplay, taskMenuIcon);
    taskEditCont.replaceWith(editedTaskLi);
    taskList.appendChild(editedTaskLi);
    
}