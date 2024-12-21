import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { allProjects } from './data';

export const editProjectNameCancelBtn = () => {
    const editProjectCont = document.querySelector('.edit-project-form-cont');
    const currentProjectName = editProjectCont.dataset.projectTitle;

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
    newProjectNameText.textContent = allProjects[currentProjectName].getProjectName();

    newProjectLi.dataset.projectTitle = allProjects[currentProjectName].getProjectName();
    
    newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);
    
    //append icon and new project name to project list
    editProjectCont.replaceWith(newProjectLi);   
}