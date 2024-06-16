import addIcon from './icons/note-plus.svg';
import folderCogIcon from './icons/folder-cog.svg';
import { mainNav, addProjectsDiv, projectsList, addNewProjectCont, enterProjectTitleLabel, enterProjectTitleInput, addProjectBtn, cancelAddProjectBtn } from "./utils";

export const createProjectsMenu = () => {
    const projectsHeader = document.createElement('h2');
    projectsHeader.textContent = 'Projects';
    projectsHeader.setAttribute('id', 'projects-header');
    
    addProjectsDiv.classList.add('add-projects-div');

    const addProjectsIcon = new Image();
    addProjectsIcon.src = addIcon;
    addProjectsIcon.classList.add('icons');

    const addProjects = document.createElement('div');
    addProjects.textContent = 'Add Projects';
    addProjects.classList.add('add-projects-txt');

    addProjectsDiv.append(addProjectsIcon, addProjects);
    
    mainNav.append(projectsHeader, addProjectsDiv, projectsList);

    //Create elements for adding new project and project name
        const projectIcon = new Image();
        projectIcon.src = folderCogIcon;
        projectIcon.classList.add('icons');
        projectIcon.classList.add('add-project-icon');


        // Append elements
        addNewProjectCont.append(projectIcon, enterProjectTitleLabel, enterProjectTitleInput, addProjectBtn, cancelAddProjectBtn);
        enterProjectTitleInput.focus();
};



    