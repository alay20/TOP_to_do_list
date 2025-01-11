import { allTasks } from "./data";
import { addTaskInputCont, cancelAddTaskBtn, cancelEditTaskBtn, enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput } from "./utils";

export const displayEditTaskFrom = (e) => {
    if (e.target.matches('.popup-menu-edit.task')) {
    const liTaskClicked = e.target.parentElement.closest('li');
    console.log('Task to be edited:', liTaskClicked);
    
    if (liTaskClicked) {
        var taskKey = liTaskClicked.dataset.taskTitle;
    }
    
    enterTaskNameInput.value = allTasks[taskKey].getTaskTitleAsEntered();
    enterTaskNotesInput.value = allTasks[taskKey].getTaskNotes();
    enterTaskDateInput.value = allTasks[taskKey].getTaskDueDate();
    
    liTaskClicked.replaceWith(addTaskInputCont);
    
    cancelEditTaskBtn.classList.add('edit-task');
    cancelAddTaskBtn.replaceWith(cancelEditTaskBtn);

    addTaskInputCont.dataset.taskTitle = allTasks[taskKey].getTaskTitleUnique();

    };
};