import { allTasks } from "./data";
import { editTaskDateInput, editTaskInputCont, editTaskNameInput, editTaskNotesInput } from "./utils";


export const displayEditTaskFrom = (e) => {
    if (e.target.matches('.popup-menu-edit.task')) {
    const liTaskClicked = e.target.parentElement.closest('li');
    console.log('Task to be edited:', liTaskClicked);
    
    if (liTaskClicked) {
        var taskKey = liTaskClicked.dataset.taskTitle;
    }
    
    editTaskNameInput.value = allTasks[taskKey].getTaskTitleAsEntered();
    editTaskNotesInput.value = allTasks[taskKey].getTaskNotes();
    editTaskDateInput.value = allTasks[taskKey].getTaskDueDate();
    
    liTaskClicked.replaceWith(editTaskInputCont);

    editTaskInputCont.dataset.taskTitle = allTasks[taskKey].getTaskTitleUnique();

    };
};