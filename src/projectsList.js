import addIcon from './icons/note-plus.svg';
import folderCogIcon from './icons/folder-cog.svg';
import { mainNav, addProjectsLi, projectsList, addNewProjectCont, enterProjectNameLabel, enterProjectNameInput, addProjectBtn, cancelAddProjectBtn } from "./utils";

export const createProjectsMenu = () => {
    const projectsHeader = document.createElement('h2');
    projectsHeader.textContent = 'Projects';
    projectsHeader.setAttribute('id', 'projects-header');
    
    projectsList.classList.add('projects-list');
    
    mainNav.append(projectsHeader, projectsList);

    addProjectsLi.classList.add('add-projects-li');

    const addProjectsIcon = new Image();
    addProjectsIcon.src = addIcon;
    addProjectsIcon.classList.add('icons');

    const addProjects = document.createElement('div');
    addProjects.textContent = 'Add Projects';
    addProjects.classList.add('add-projects-txt');

    addProjectsLi.append(addProjectsIcon, addProjects);
    projectsList.appendChild(addProjectsLi);
    
    //Create elements for adding new project and project name
        const projectIcon = new Image();
        projectIcon.src = folderCogIcon;
        projectIcon.classList.add('icons');
        projectIcon.classList.add('add-project-icon');

        addNewProjectCont.classList.add('add-new-project-cont');
        
        //Buttons to add project or cancel adding
        addProjectBtn.textContent = 'Add';
        addProjectBtn.classList.add('projects-buttons')
        addProjectBtn.classList.add('add-project-btn');

        cancelAddProjectBtn.textContent = 'Cancel';
        cancelAddProjectBtn.classList.add('projects-buttons');
        cancelAddProjectBtn.classList.add('cancel-add-btn');

        // Append elements
        addNewProjectCont.append(projectIcon, enterProjectNameLabel, enterProjectNameInput, addProjectBtn, cancelAddProjectBtn);
        enterProjectNameInput.focus();
};



    