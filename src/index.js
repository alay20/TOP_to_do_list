import './style.css';

import { menuBtn, addProjectsDiv, projectsList, enterProjectNameInput, addProjectBtn, cancelAddProjectBtn } from './utils';

import { createHeader } from './header';
import { createTaskFilter } from './taskFilter';
import { createProjectsMenu } from './projectsList';
import { createDefaultAllTasksTitle } from './displayDefaulProjectTitle';
import { showMenu } from './menuButton';
import { openAddNewProject } from './openAddProjects';
import { addProjectsToListDom } from './addProjectsAddBtnDom';
import { cancelAddProject } from './cancelAddProject';
import { addProjectsToObj } from './addProjectsAddBtn';
import { keyPressEnterAddProject } from './keyPressEnterAddProject';
import { createClickedProjectTitle } from './displayClickedProjectTitle';
import { displayAddTaskElements } from './projectPageDisplayAddTask';


createHeader();
createTaskFilter();
createProjectsMenu();
createDefaultAllTasksTitle();

menuBtn.addEventListener('click', showMenu);

addProjectsDiv.addEventListener('click', openAddNewProject);

addProjectBtn.addEventListener('click', addProjectsToListDom);
addProjectBtn.addEventListener('click', addProjectsToObj);
enterProjectNameInput.addEventListener('keypress', keyPressEnterAddProject);

cancelAddProjectBtn.addEventListener('click', cancelAddProject);

projectsList.addEventListener('click', createClickedProjectTitle);
projectsList.addEventListener('click', displayAddTaskElements);