import './style.css';

import { menuBtn, addProjectsLi, cancelAddProjectBtn } from './utils';

import { createHeader } from './header';
import { createTaskFilter } from './taskFilter';
import { createProjectsMenu } from './projectsList';
import { createTaskProjectDisplay } from './taskProjectDisplay';
import { showMenu } from './menuButton';
import { addNewProject } from './addProjects';
import { cancelAddProject } from './cancelAddProject';

createHeader();
createTaskFilter();
createProjectsMenu();
createTaskProjectDisplay();

menuBtn.addEventListener('click', showMenu);
addProjectsLi.addEventListener('click', addNewProject);
cancelAddProjectBtn.addEventListener('click', cancelAddProject);