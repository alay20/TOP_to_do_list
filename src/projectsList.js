import { mainNav } from "./utils";
import addIcon from './icons/note-plus.svg';

export const createProjects = () => {
    
    const projectsHeader = document.createElement('h2');
    projectsHeader.textContent = 'Projects';
    projectsHeader.setAttribute('id', 'projects-header');
    

    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects-list');
    
    mainNav.append(projectsHeader, projectsList);

    const addProjectsIcon = new Image();
    addProjectsIcon.src = addIcon;
    addProjectsIcon.classList.add('icons');

    const addProjects = document.createElement('div');
    addProjects.textContent = 'Add Projects';
    addProjects.classList.add('add-projects-txt');

    projectsList.append(addProjectsIcon, addProjects);



};
