import { allTasks, allTasksCounters } from "./data";

export const deleteTask = (e) => {
    if (e.target.matches('.popup-menu-delete.task')) {
        const taskToDeleteLi = e.target.parentElement.closest('li');
    
        const taskToDeleteKey = taskToDeleteLi.dataset.taskTitle;
        delete allTasks[taskToDeleteKey];

        allTasksCounters[taskToDeleteKey]--;

        if (allTasksCounters[taskToDeleteKey] === 0) {
            delete allTasksCounters[taskToDeleteKey];
        };

        //Delete from localStorage
        const storedAllTasks = JSON.parse(localStorage.getItem('allTasks'));
        let storedAllTasksCounters = JSON.parse(localStorage.getItem('allTasksCounters'));

        delete storedAllTasks[taskToDeleteKey];
        storedAllTasksCounters[taskToDeleteKey]--; 
        if (storedAllTasksCounters[taskToDeleteKey] === 0) {
            delete storedAllTasksCounters[taskToDeleteKey];
        };

        localStorage.setItem('allTasks', JSON.stringify(storedAllTasks));
        localStorage.setItem('allTasksCounters', JSON.stringify(storedAllTasksCounters));
        
        taskToDeleteLi.remove();
    }
}