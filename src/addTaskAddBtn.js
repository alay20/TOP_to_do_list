import { createTask } from "./addTaskFactoryFunction";
import { allTasks, allTasksCounters } from "./data";
import { enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput, lastClickedProject } from "./utils";

//Add the new task into the allTasks obejct
export const addTaskToObj = () => {
    const newTaskName = enterTaskNameInput.value.trim().toLowerCase();
    let uniqueTaskName;

    const newTaskNotes = enterTaskNotesInput.value;

    const newTaskDate = enterTaskDateInput.value;

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
    
    const newTask = createTask(uniqueTaskName, newTaskNotes, undefined, newTaskDate, lastClickedProject);

    allTasks[enterTaskNameInput.value] = newTask;
    // allTasks[uniqueTaskName] = newTask;

};