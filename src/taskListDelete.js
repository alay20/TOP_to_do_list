import { allTasks } from "./data";

export const deleteTask = (e) => {
    if (e.target.matches('.popup-menu-delete.task')) {
        const taskToDeleteLi = e.target.parentElement.closest('li');
    
        const taskToDeleteKey = taskToDeleteLi.dataset.taskTitle;
        delete allTasks[taskToDeleteKey];

        taskToDeleteLi.remove();
    }
}