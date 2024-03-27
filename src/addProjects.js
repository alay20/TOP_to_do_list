import folderCogIcon from './icons/folder-cog.svg';
import { projectsList, addNewProjectCont, enterProjectNameLabel, enterProjectNameInput, cancelAddProjectBtn } from './utils';

export const addNewProject = () => {
    
    // const addNewProjectCont = document.createElement('div');
    addNewProjectCont.classList.add('add-new-project-cont');
    
    //Icon for adding new project
    const projectIcon = new Image();
    projectIcon.src = folderCogIcon;
    projectIcon.classList.add('icons');
    projectIcon.classList.add('add-project-icon');

    //Buttons to add project or cancel adding
    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Add';
    addProjectBtn.classList.add('projects-buttons')
    addProjectBtn.classList.add('add-project-btn');

    cancelAddProjectBtn.textContent = 'Cancel';
    cancelAddProjectBtn.classList.add('projects-buttons');
    cancelAddProjectBtn.classList.add('cancel-add-btn');

    // Append elements
    projectsList.append(addNewProjectCont);
    addNewProjectCont.append(projectIcon, enterProjectNameLabel, enterProjectNameInput, addProjectBtn, cancelAddProjectBtn);

    enterProjectNameInput.focus();
}