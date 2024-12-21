import { projectTitleCont, addTaskInputCont, enterTaskNameInput, enterTaskNotesInput, enterTaskDateInput, setLastClickedProject, lastClickedProject} from "./utils";
import { allProjects } from "./data";

export const createClickedProjectTitle = (e) => {
  if ((e.target.classList.contains('icons') && e.target.classList.contains('project-menu')) 
        || e.target.classList.contains('popup-menu-ul') 
        || e.target.classList.contains('popup-menu-edit')
        || e.target.classList.contains('popup-menu-delete')
        || e.target.closest('edit-project-form-cont')
        || e.target.classList.contains('edit-project-form-cont')
        || e.target.classList.contains('icons')
        || e.target.tagName === 'UL'
        || e.target.tagName === 'BUTTON') {
    e.stopPropagation();
  } else {
    console.log('Event Target:', e.target);
    
    const liWithDataset = e.target.closest('li');
    
    if (liWithDataset) {
        var projectTitle = liWithDataset.dataset.projectTitle;
    }
    
    projectTitleCont.textContent = allProjects[projectTitle].getProjectName();
    projectTitleCont.dataset.projectTitle = allProjects[projectTitle].getProjectName();
    setLastClickedProject(allProjects[projectTitle].getProjectName());

    console.log('Last clicked project:', lastClickedProject);
    
    
    
    //Close add task form if opened 
    addTaskInputCont.remove();
    enterTaskNameInput.value = "";
    enterTaskNotesInput.value = "";
    enterTaskDateInput.value = "";
  }
};