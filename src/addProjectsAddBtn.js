import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { addNewProjectCont, newProjectLi, newProjectNameText } from './utils';

export const addProjectsToList = () => {
    //Remove contaienr for adding name of project
    addNewProjectCont.remove();
    enterProjectNameInput.value = '';

    const projectMenuIcon = new Image();
    projectMenuIcon.src = menuDots;
    projectMenuIcon.classList.add('icons');
    projectMenuIcon.classList.add('project-menu');

    // newProjectNameText.textContent = 


}