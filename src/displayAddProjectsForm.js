import { addProjectsDiv, addNewProjectCont, enterProjectTitleInput, enterProjectTitleLabel, addProjectBtn, cancelAddProjectBtn } from './utils';
import folderCogIcon from './icons/folder-cog.svg';

export const openAddNewProject = () => {
    //Create elements for adding new project and project name
    const projectIcon = new Image();
    projectIcon.src = folderCogIcon;
    projectIcon.classList.add('icons');
    projectIcon.classList.add('add-project-icon');

    // Append elements from utils
    addNewProjectCont.append(projectIcon, enterProjectTitleLabel, enterProjectTitleInput, addProjectBtn, cancelAddProjectBtn);
    enterProjectTitleInput.focus();
    
    addProjectsDiv.insertAdjacentElement('afterend', addNewProjectCont);
    enterProjectTitleInput.focus();
}