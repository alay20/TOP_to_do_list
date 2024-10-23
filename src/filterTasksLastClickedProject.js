import { allTasks } from "./data";
import { lastClickedProject } from "./utils";

export const filterTasksLastClickedProject = () => { 

const tasksFilteredClickedProjectArray = Object.entries(allTasks)
.filter(([key, value]) => value.getProject() === lastClickedProject);

const tasksFilteredClickedProjectObj = Object.fromEntries(tasksFilteredClickedProjectArray);

console.log('List of tasks from last clicked project:', tasksFilteredClickedProjectObj)

return tasksFilteredClickedProjectObj;

}