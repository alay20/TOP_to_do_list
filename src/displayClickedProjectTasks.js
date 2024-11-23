import checkBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';
import filledStar from './icons/important-star.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';
import { filterTasksLastClickedProject } from "./filterTasksLastClickedProject";
import { openAddTaskBtnCont, taskList } from "./utils";
import { format, parseISO } from 'date-fns';

export const createFilteredTasks = (e) => {
        if (e.target.classList.contains('icons') && e.target.classList.contains('project-menu')
            || e.target.classList.contains('popup-menu-ul') 
            || e.target.classList.contains('popup-menu-edit') 
            || e.target.classList.contains('popup-menu-delete')) {
        e.stopPropagation();
        } else {
                taskList.replaceChildren();
        taskList.remove();

        const tasksFilteredClickedProjectObj = filterTasksLastClickedProject();

        Object.entries(tasksFilteredClickedProjectObj).forEach(([key, method]) => {
        
                const newTaskLi = document.createElement('li');
                newTaskLi.classList.add('new-task-li');
                newTaskLi.dataset.taskTitle = key;
                
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
                
                taskText.textContent = key;
                console.log("Task Title:", method.getTaskTitle().split('_')[0]);

                taskNotes.textContent = method.getTaskNotes();
                
                const taskDueDate = document.createElement('p');
                taskDueDate.classList.add('task-due-date');

                //Determine text output for due date element
                if (method.getTaskDueDate() === "") {
                        taskDueDate.textContent = 'No Due Date'
                    } else {
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

        if (Object.entries(tasksFilteredClickedProjectObj).length > 0) {
                openAddTaskBtnCont.insertAdjacentElement('beforebegin', taskList)
        }; 
        ;}      
};