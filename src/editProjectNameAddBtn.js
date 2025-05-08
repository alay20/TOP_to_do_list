import folderCogIcon from './icons/folder-cog.svg';
import menuDots from './icons/dots-vertical.svg';
import { enterProjectTitleInputEdit, projectsList, projectTitleCont, setLastClickedProject } from "./utils"
import { allProjects, allTasks } from './data';
import { createProject } from './addProjectFactoryFunction';
import { createTask } from './addTaskFactoryFunction';

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
        // allProjects[newProjectName] = allProjects[originalProjectName];
        allProjects[newProjectName] = Object.assign({}, allProjects[originalProjectName]);
        
        delete allProjects[originalProjectName];

        //Change tasks tied to previous project name to new project name 
        for (const [key, value] of Object.entries(allTasks)) {
            if (value.getProject() === originalProjectName) {
                value.setProject(newProjectName);
            }
        }

        let storedAllTasks = JSON.parse(localStorage.getItem('allTasks')) || {};
        
        for (const [key, value] of Object.entries(storedAllTasks)) {
            storedAllTasks[key] = createTask(
            storedAllTasks[key].title,
            storedAllTasks[key].uniqueTitle,
            storedAllTasks[key].notes,
            storedAllTasks[key].complete,
            storedAllTasks[key].dueDate,
            storedAllTasks[key].taskProject,
            storedAllTasks[key].isImportant
            )

            if (storedAllTasks[key].getProject() === originalProjectName) {
                storedAllTasks[key].setProject(newProjectName);
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

        //Update localStorage allProjects storage object 
        let storedProjects = JSON.parse(localStorage.getItem('allProjects')) || {};
        let restoredAllProjects = Object.fromEntries(
            Object.entries(storedProjects).map(([key, value]) => [key, createProject(key)])
        );

        restoredAllProjects[originalProjectName].setProjectName(newProjectName);
        restoredAllProjects[newProjectName] = Object.assign({}, restoredAllProjects[originalProjectName]);
        delete restoredAllProjects[originalProjectName];

        localStorage.setItem('allProjects', JSON.stringify(restoredAllProjects));
        localStorage.setItem('allTasks', JSON.stringify(storedAllTasks));
    };
    
    //replace edit project name container with new project name
    editProjectCont.replaceWith(newProjectLi);   

};