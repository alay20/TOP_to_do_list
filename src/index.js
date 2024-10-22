import './style.css';

import { menuBtn, addProjectsDiv, projectsList, enterProjectTitleInput, addProjectBtn, cancelAddProjectBtn, openAddTaskBtnCont, cancelAddTaskBtn, addTaskBtn, addTaskInputCont, taskList} from './utils';

import { createHeader } from './header';
import { createTaskFilter } from './taskFilter';
import { createProjectsMenu } from './projectsList';
import { createDefaultAllTasksTitle } from './displayDefaulProjectTitle';
import { showMenu } from './menuButton';
import { openAddNewProject } from './displayAddProjectsForm';
import { addProjectsToListDom } from './addProjectsAddBtnDom';
import { cancelAddProject } from './cancelAddProject';
import { addProjectsToObj } from './addProjectsAddBtn';
import { keyPressEnterEventListener } from './keyPressEnterEvent';
import { createClickedProjectTitle } from './displayClickedProjectTitle';
import { displayAddTaskElements } from './projectPageDisplayAddTask';
import { displayAddTaskForm } from './displayAddTaskForm';
import { cancelAddTask } from './cancelAddTask';
import { addTaskToObj } from './addTaskAddBtn';
import { addTaskToList } from './addTaskAddBtnDom';
import { createFilteredTasks } from './displayClickedProjectTasks';
import { toggleCheckBox } from './toggleCheckbox';
import { toggleImportant } from './toggleImportant';


createHeader();
createTaskFilter();
createProjectsMenu();
createDefaultAllTasksTitle();

menuBtn.addEventListener('click', showMenu);

addProjectsDiv.addEventListener('click', openAddNewProject);

addProjectBtn.addEventListener('click', addProjectsToListDom);
addProjectBtn.addEventListener('click', addProjectsToObj);

enterProjectTitleInput.addEventListener('keypress', (e) => keyPressEnterEventListener(e, addProjectBtn));

cancelAddProjectBtn.addEventListener('click', cancelAddProject);

projectsList.addEventListener('click', createClickedProjectTitle);
projectsList.addEventListener('click', displayAddTaskElements);
projectsList.addEventListener('click', createFilteredTasks);


//Task Form
openAddTaskBtnCont.addEventListener('click', displayAddTaskForm);
cancelAddTaskBtn.addEventListener('click', cancelAddTask);
addTaskBtn.addEventListener('click', addTaskToObj);
addTaskBtn.addEventListener('click', addTaskToList);
addTaskInputCont.addEventListener('keypress', (e) => keyPressEnterEventListener(e, addTaskBtn));

//Task List elements
taskList.addEventListener('click', toggleCheckBox);
taskList.addEventListener('click', toggleImportant);