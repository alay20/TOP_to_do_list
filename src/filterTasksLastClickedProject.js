import { allTasks } from "./data";
import { lastClickedProject } from "./utils";

export const filterTasksLastClickedProject = () => { 

const tasksFilteredClickedProjectArray = Object.entries(allTasks)
.filter(([key, value]) => value.getProject() === lastClickedProject);

const tasksFilteredClickedProjectObj = Object.fromEntries(tasksFilteredClickedProjectArray);

const tasksFilteredArray = Object.keys(tasksFilteredClickedProjectObj);

console.log('List of tasks from last clicked project:', tasksFilteredClickedProjectObj)

return tasksFilteredClickedProjectObj;

// return tasksFilteredArray;

}