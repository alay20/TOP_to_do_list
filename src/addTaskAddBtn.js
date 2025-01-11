import { createTask } from "./addTaskFactoryFunction";
import { allTasks, allTasksCounters } from "./data";
import { enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput, lastClickedProject, addTaskInputCont, taskList, openAddTaskBtnCont, rightContainer } from "./utils";
import checkBox from './icons/checkbox-blank-outline.svg';
import star from './icons/star.svg';
import menu from './icons/dots-vertical.svg';
import { format, parseISO } from 'date-fns';

//Add the new task into the allTasks obejct
export const addTask = () => {
    
    //Add task to allTasks object
        const newTaskName = enterTaskNameInput.value.trim().toLowerCase();
        let uniqueTaskName;

        //check if task name already exists
        if (allTasks.hasOwnProperty(newTaskName)) {
            if (allTasksCounters.hasOwnProperty(newTaskName)) {
                allTasksCounters[newTaskName]++;
            } else {
                allTasksCounters[newTaskName] = 1;
            }
            uniqueTaskName = `${newTaskName}_${allTasksCounters[newTaskName]}`;
        } else {
            uniqueTaskName = newTaskName;
        }
        
        const newTaskNotes = enterTaskNotesInput.value;

        const newTaskDate = enterTaskDateInput.value;
        
        const newTask = createTask(enterTaskNameInput.value, uniqueTaskName, newTaskNotes, undefined, newTaskDate, lastClickedProject);

        allTasks[uniqueTaskName] = newTask;

    //Add task to DOM
        addTaskInputCont.remove(); 
        rightContainer.appendChild(openAddTaskBtnCont);

        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('new-task-li');
        newTaskLi.dataset.taskTitle = uniqueTaskName;

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
            if (enterTaskDateInput.value === "") {
                taskDueDate.textContent = 'No Due Date'
            } else {
                const dateToFormat = parseISO(enterTaskDateInput.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                dateToFormat.setHours(0, 0, 0, 0);
                    if (dateToFormat.getTime() === today.getTime()) {
                        taskDueDate.textContent = 'Today';
                    } else {
                        taskDueDate.textContent = format(dateToFormat, 'EEE, MMM d, yyyy');
                    };
            };

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