import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { enterProjectTitleInputEdit, projectsList, projectTitleCont, setLastClickedProject } from "./utils"
import { allProjects, allTasks } from './data';

export const editProjectNameAddBtn = () => {
    const editProjectCont = document.querySelector('.edit-project-form-cont');
    const originalProjectName = editProjectCont.dataset.projectTitle;
    
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

if (enterProjectTitleInputEdit.value === originalProjectName) {

    newProjectNameText.textContent = allProjects[originalProjectName].getProjectName();

    newProjectLi.dataset.projectTitle = allProjects[originalProjectName].getProjectName();
    
    newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);
    } else {
        var newProjectName = enterProjectTitleInputEdit.value;

        newProjectLi.dataset.projectTitle = newProjectName;

        console.log('Current Project Name:', allProjects[originalProjectName]);
        
        allProjects[originalProjectName].setProjectName(newProjectName);

        //replace key in allProjects for previous project name with new project name
        allProjects[newProjectName] = allProjects[originalProjectName];
        
        delete allProjects[originalProjectName];

        //Change tasks tied to previous project name to new project name 
        for (const [key, value] of Object.entries(allTasks)) {
            if (value.getProject() === originalProjectName) {
                value.setProject(newProjectName);
            }
        }

        console.log('New Project Name:', newProjectName);
        
        newProjectName = allProjects[newProjectName].getProjectName();
        
        newProjectNameText.textContent = newProjectName;

        newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);

        //Change project title on display in right container if project is on display
        const displayProjectName = document.querySelector('.project-title-cont');

        if (displayProjectName.dataset.projectTitle === originalProjectName) {
            projectTitleCont.textContent = newProjectName;
            setLastClickedProject(newProjectName);
        }
    }
    
    //replace edit project name container with new project name
    editProjectCont.replaceWith(newProjectLi);   

};