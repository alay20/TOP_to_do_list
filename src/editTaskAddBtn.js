import { allTasks, allTasksCounters } from "./data";
import { editTaskDateInput, editTaskNameInput, editTaskNotesInput } from "./utils"

export const addEditTask = () => {
    //Add edited task to alltask object
    const editTaskName = editTaskNameInput.value.trim().toLowerCase(); 
    const originalTaskName 
    let uniqueTaskName

      //check if task name already exists
      if (allTasks.hasOwnProperty(editTaskName)) {
        allTasks[editTaskName].setTaskNotes(editTaskNotesInput.value);
        allTasks[editTaskName].setTaskDueDate(editTaskDateInput.value);
        } else {
            // allTasks[].setTaskTitle()    
            allTasksCounters[editTaskName] = 1;
            };
            uniqueTaskName = `${editTaskName}_${allTasksCounters[editTaskName]}`;
        } else {
            uniqueTaskName = editTaskName
        }


        if (allTasksCounters.hasOwnProperty(editTaskName)) {
            allTasksCounters[editTaskName]++;
    
}