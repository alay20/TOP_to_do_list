import { allTasks } from "./data";
import { editTaskDateInput, editTaskInputCont, editTaskNameInput, editTaskNotesInput, errorCloseIcon, errorCont, errorHeader, errorMessage, overlay } from "./utils";
import close from './icons/window-close.svg';


export const displayEditTaskFrom = (e) => {
    if (e.target.matches('.popup-menu-edit.task')) {
    
        if (document.querySelectorAll('.add-task-form-cont.edit-task').length > 0) {
            console.log('Edit one task at a time');
            
            document.body.appendChild(overlay);
            
            errorCloseIcon.src = close;
            errorCloseIcon.classList.add('close-icon');

            errorCont.append(errorHeader, errorMessage, errorCloseIcon);

            overlay.append(errorCont);

        } else {
         
            const liTaskClicked = e.target.parentElement.closest('li');
            console.log('Task to be edited:', liTaskClicked);
    
            if (liTaskClicked) {
                var taskKey = liTaskClicked.dataset.taskTitle;
            }
    
            editTaskNameInput.value = allTasks[taskKey].getTaskTitleAsEntered();
            editTaskNotesInput.value = allTasks[taskKey].getTaskNotes();
            editTaskDateInput.value = allTasks[taskKey].getTaskDueDate();
            
            liTaskClicked.replaceWith(editTaskInputCont);

            editTaskInputCont.dataset.taskTitle = allTasks[taskKey].getTaskUniqueTitle();

    };
}};