import { projectTitleCont } from "./utils";
import { allProjects } from "./data";

export const createClickedProjectTitle = (e) => {
    console.log('Event Target:', e.target);
    
    const liWithDataset = e.target.closest('li');
    
    if (liWithDataset) {
        var projectTitle = liWithDataset.dataset.projectTitle;
    }
    
    console.log('Project Title:', allProjects[projectTitle].getProjectName());
    projectTitleCont.textContent = allProjects[projectTitle].getProjectName();
};

