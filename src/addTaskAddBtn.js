import { createTask } from "./addTaskFactoryFunction";
import { allTasks } from "./data";
import { enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput } from "./utils";

export const addTaskToObj = () => {
    const newTaskName = enterTaskNameInput.value;
    enterTaskNameInput.value = "";

    const newTaskNotes = enterTaskNotesInput.value;
    enterTaskNotesInput.value = "";

    const newTaskDate = enterTaskDateInput.value;
    enterTaskDateInput.value = "";

    const newTask = createTask(newTaskName, newTaskNotes, newTaskDate);

    //can't use task name as key name in allTasks object in case more than 1 task have same task name
    allTasks[newTaskName] = newTask;

};