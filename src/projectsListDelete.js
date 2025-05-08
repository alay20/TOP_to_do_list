import { allProjects, allTasks } from "./data";
import { projectTitleCont, rightContainer } from "./utils";

export const deleteProject = (e) => {
    if (e.target && e.target.matches('.popup-menu-delete')) {
        const projToDeleteLi = e.target.parentElement.closest('li');
        console.log('Project to be deleted:', projToDeleteLi);

        const nameProjToDelete = projToDeleteLi.dataset.projectTitle; 
        delete allProjects[nameProjToDelete];

        //Remove Deleted object from localStorage and save updated object to localStorage
        let storedProjects = JSON.parse(localStorage.getItem('allProjects')) || {};
        delete storedProjects[nameProjToDelete];
        localStorage.setItem('allProjects', JSON.stringify(storedProjects));
        

        //Remove project name from tasks tied to project
        for (const [key, value] of Object.entries(allTasks)) {
            if (value.getProject() === nameProjToDelete) {
                value.setProject(null);
            }
        }
        
        const popupMenu = document.querySelector('.project-popup-menu');
        popupMenu.remove();
        

        //Remove project if on display 
        const displayProjectName = document.querySelector('.project-title-cont');
        console.log('Project name on display:', displayProjectName);

        if (displayProjectName.dataset.projectTitle === projToDeleteLi.dataset.projectTitle) {
            rightContainer.replaceChildren();
            projectTitleCont.textContent = "All Tasks";
            rightContainer.appendChild(projectTitleCont);
        }

        projToDeleteLi.remove(); 
    };
};