import { projectTitleCont, addTaskInputCont, enterTaskNameInput, enterTaskNotesInput, enterTaskDateInput, setLastClickedProject, lastClickedProject, openAddTaskBtnCont, taskList} from "./utils";
import { allProjects, allTasks } from "./data";

export const createClickedProjectTitle = (e) => {
    console.log('Event Target:', e.target);
    
    const liWithDataset = e.target.closest('li');
    
    if (liWithDataset) {
        var projectTitle = liWithDataset.dataset.projectTitle;
    }
    
    projectTitleCont.textContent = allProjects[projectTitle].getProjectName();
    setLastClickedProject(allProjects[projectTitle].getProjectName());

    console.log('Last clicked project:', lastClickedProject);
    
    
    
    //Close add task form if opened 
    addTaskInputCont.remove();
    enterTaskNameInput.value = "";
    enterTaskNotesInput.value = "";
    enterTaskDateInput.value = "";
};
