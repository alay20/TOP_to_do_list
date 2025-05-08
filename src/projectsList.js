import { createProject } from './addProjectFactoryFunction';
import addIcon from './icons/note-plus.svg';
import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { mainNav, addProjectsDiv, projectsList } from "./utils";
import { allProjects } from './data';

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


    //Access Project names stored in local storage
    let storedProjects = JSON.parse(localStorage.getItem('allProjects')) || {};

    let restoredAllProjects = Object.fromEntries(
        Object.entries(storedProjects).map(([key, value]) => [key, createProject(key)])
    );
    
    Object.entries(restoredAllProjects).forEach(([projectName, value]) => {
        const newProjectLi = document.createElement('li');
        newProjectLi.classList.add('new-project-li');

        const projectIcon = new Image();
        projectIcon.src = folderCogIcon;
        projectIcon.classList.add('icons', 'add-project-icon');

        const projectMenuIcon = new Image();
        projectMenuIcon.src = menuDots;
        projectMenuIcon.classList.add('icons', 'project-menu');

        const newProjectNameText = document.createElement('div');
        newProjectNameText.classList.add('list-project-txt');
        newProjectNameText.textContent = value.getProjectName();

        newProjectLi.dataset.projectTitle = value.getProjectName();

        newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);
        projectsList.appendChild(newProjectLi);
        }
    );

    Object.assign(allProjects, restoredAllProjects);

       
    
    
    mainNav.append(projectsHeader, addProjectsDiv, projectsList);
};



    