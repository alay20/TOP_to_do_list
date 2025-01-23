export const closeTaskErrorPoup = (e) => {
    if (e.target.matches('.close-icon')) {
        const overlay = document.querySelector('.overlay');
        const errorPopup = document.querySelector('.edit-task-error-cont');
        overlay.remove();
        errorPopup.remove();

        const taskListPopup = document.querySelector('.task-popup-menu');
        taskListPopup.remove(); 
    }
}