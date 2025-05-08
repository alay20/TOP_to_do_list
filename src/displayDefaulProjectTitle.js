import { createTask } from "./addTaskFactoryFunction";
import { rightContainer, projectTitleCont, taskList } from "./utils";
import checkBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';
import filledStar from './icons/important-star.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';
import { format, parseISO } from 'date-fns';
import { allTasks, allTasksCounters } from "./data";

export const createDefaultAllTasksTitle = () => {
    projectTitleCont.textContent = "All Tasks";
    rightContainer.appendChild(projectTitleCont);

    //Access tasks in local storage
    let storedAllTasks = JSON.parse(localStorage.getItem('allTasks')) || {};
     
    for (let key in storedAllTasks) {
        let task = storedAllTasks[key];
        storedAllTasks[key] = createTask(
                task.title,
                task.uniqueTitle,
                task.notes,
                task.complete,
                task.dueDate,
                task.taskProject,
                task.isImportant
        );

        console.log('Task project is in:', storedAllTasks[key].getProject());
     }
     

    Object.entries(storedAllTasks).forEach(([task, method]) => {
        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('new-task-li');
        newTaskLi.dataset.taskTitle = task;

        const taskCheckbox = new Image();
            if (method.getTaskComplete()) {
                    taskCheckbox.src = checkedBox;
            } else {
                    taskCheckbox.src = checkBox;
            }
        taskCheckbox.classList.add('icons');
        taskCheckbox.classList.add('task-checkbox');

        const taskText = document.createElement('p');
        const taskNotes = document.createElement('p');
        if (method.getTaskComplete()) {
                taskText.classList.add('task-text-completed');        
                taskNotes.classList.add('task-notes-completed');
        } else {
                taskText.classList.add('task-text');
                taskNotes.classList.add('task-notes');
        }
        
        taskText.textContent = method.getTaskTitleAsEntered();
        taskNotes.textContent = method.getTaskNotes();

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');

        console.log('Date being passed to parseISO: ', method.getTaskDueDate());
        //Determine text output for due date element
        if (method.getTaskDueDate() === "") {
                taskDueDate.textContent = 'No Due Date'
            } 
            else {
                const dateToFormat = parseISO(method.getTaskDueDate());
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                dateToFormat.setHours(0, 0, 0, 0);
                    if (dateToFormat.getTime() === today.getTime()) {
                        taskDueDate.textContent = 'Today';
                    } else {
                        taskDueDate.textContent = format(dateToFormat, 'EEE, MMM d, yyyy');
                    }
            };
    

        //Determine if important is true or false and display correct star 
        let starImportant = new Image();
        if (method.getImportant()) {
                starImportant.src = filledStar;
                starImportant.classList.add('icons', 'task-star-important');
        } else {                        
                starImportant.src = star;
                starImportant.classList.add('icons', 'task-star');
        }
    
        const taskMenuIcon = new Image();
        taskMenuIcon.src = menu;
        taskMenuIcon.classList.add('icons');
        taskMenuIcon.classList.add('task-menu');


        newTaskLi.append(taskCheckbox, taskText, taskNotes, taskDueDate, starImportant, taskMenuIcon);

        taskList.appendChild(newTaskLi);
    });
        
    projectTitleCont.insertAdjacentElement("afterend", taskList);

    Object.assign(allTasks, storedAllTasks);

    //Save localStorage allTasksCounters
    let storedAllTasksCounters = JSON.parse(localStorage.getItem('allTasksCounters')) || {};
    Object.assign(allTasksCounters, storedAllTasksCounters);


};