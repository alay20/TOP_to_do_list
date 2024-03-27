import { mainNav, addProjectsLi, projectsList } from "./utils";
import addIcon from './icons/note-plus.svg';


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
    
    

};
