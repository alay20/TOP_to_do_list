import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { addNewProjectCont, projectsList, enterProjectTitleInput, projectNameErrorMsg } from './utils';

export const addProjectsToListDom = () => {
    const newProjectName = enterProjectTitleInput.value;
    const projectNames = Object.keys(allProjects) ;
    
    //Determine if project name already exists
    if (projectNames.includes(newProjectName)) {
        addNewProjectCont.insertAdjacentElement('afterend', projectNameErrorMsg);
        return;
    } else {
        addNewProjectCont.remove();
        projectNameErrorMsg.remove();
        
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
        newProjectNameText.textContent = enterProjectTitleInput.value;

        newProjectLi.dataset.projectTitle = enterProjectTitleInput.value;
        
        newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);
        
        //append icon and new project name to project list
        projectsList.appendChild(newProjectLi);
        
    }
};