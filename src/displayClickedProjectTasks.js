import checkBox from './icons/checkbox-blank-outline.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';
import { filterTasksLastClickedProject } from "./filterTasksLastClickedProject";
import { openAddTaskBtnCont, taskList } from "./utils";

export const createFilteredTasks = () => {

        taskList.replaceChildren();
        taskList.remove();

        const tasksFilteredClickedProjectObj = filterTasksLastClickedProject();

        Object.entries(tasksFilteredClickedProjectObj).forEach(([key, getFunction]) => {
        
                // getTaskTitle, getTaskDescription, getTaskDueDate, getProject
                
                const newTaskLi = document.createElement('li');
                // taskList.dataset.projectTitle = lastClickedProject;


                const taskCheckbox = new Image();
                taskCheckbox.src = checkBox;
                taskCheckbox.classList.add('icons');
                taskCheckbox.classList.add('task-checkbox');

                const taskText = document.createElement('p');
                taskText.classList.add('task-text');
                taskText.textContent = getFunction.getTaskTitle().split('_')[0];  
                console.log("Task Title:", getFunction.getTaskTitle().split('_')[0]);

                const taskDueDateDiv = document.createElement('div');

                //Determine text output for due date element
                if (getFunction.getTaskDueDate() === '') {
                        taskDueDateDiv.textContent = 'No Due Date'
                } else {
                        taskDueDateDiv.textContent = getTaskDueDate();
                }


                const starImportant = new Image();
                starImportant.src = star;
                starImportant.classList.add('icons');

                const taskMenuIcon = new Image();
                taskMenuIcon.src = menu;
                taskMenuIcon.classList.add('icons');

                newTaskLi.append(taskCheckbox, taskText, taskDueDateDiv, starImportant, taskMenuIcon);
                taskList.appendChild(newTaskLi);

        });
        

        if (Object.entries(tasksFilteredClickedProjectObj).length > 0) {
                openAddTaskBtnCont.insertAdjacentElement('beforebegin', taskList)
        }; 

};


