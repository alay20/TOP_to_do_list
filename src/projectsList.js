import addIcon from './icons/note-plus.svg';
import { mainNav, addProjectsDiv, projectsList } from "./utils";

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
};



    