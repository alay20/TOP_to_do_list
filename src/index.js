import './style.css';

import { menuBtn, addProjectsDiv, projectsList, enterProjectTitleInput, addProjectBtn, cancelAddProjectBtn, openAddTaskBtnCont, 
        cancelAddTaskBtn, addTaskBtn, addTaskInputCont, taskList, addProjectBtnEdit, cancelAddProjectBtnEdit, 
        enterProjectTitleInputEdit,
        cancelEditTaskBtn} from './utils';

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
import { addTask } from './addTaskAddBtn';
import { createFilteredTasks } from './displayClickedProjectTasks';
import { toggleCheckBox } from './toggleCheckbox';
import { toggleImportant } from './toggleImportant';
import { displayProjPopUpMenu } from './projectsListPopUpMenu';
import { removeProjPopupMenu } from './removeProjPopup';
import { editProjectName } from './projectsListEditName';
import { editProjectNameAddBtn } from './editProjectNameAddBtn';
import { editProjectNameCancelBtn } from './editProjectNameCancelBtn';
import { deleteProject } from './projectsListDelete';
import { displayTaskPopUpMenu } from './taskListPopUpMenu';
import { displayEditTaskFrom } from './displayEditTaskForm';
import { cancelEditTask } from './editTaskCancelBtn';
import { deleteTask } from './taskListDelete';

createHeader();
createTaskFilter();
createProjectsMenu();
createDefaultAllTasksTitle();

menuBtn.addEventListener('click', showMenu);

//Add new project
addProjectsDiv.addEventListener('click', openAddNewProject);
addProjectBtn.addEventListener('click', addProjectsToListDom);
addProjectBtn.addEventListener('click', addProjectsToObj);
enterProjectTitleInput.addEventListener('keypress', (e) => keyPressEnterEventListener(e, addProjectBtn));
cancelAddProjectBtn.addEventListener('click', cancelAddProject);

//Clicking a project
projectsList.addEventListener('click', createClickedProjectTitle);
projectsList.addEventListener('click', displayAddTaskElements);
projectsList.addEventListener('click', createFilteredTasks);

//Clicking menu icon in project
projectsList.addEventListener('click', displayProjPopUpMenu);
projectsList.addEventListener('click', editProjectName);
projectsList.addEventListener('click', deleteProject);

//Clicking buttons for editing project name
addProjectBtnEdit.addEventListener('click', editProjectNameAddBtn);
cancelAddProjectBtnEdit.addEventListener('click', editProjectNameCancelBtn);
enterProjectTitleInputEdit.addEventListener('keypress', (e) => keyPressEnterEventListener(e, addProjectBtnEdit));

//Clicking anywhere in window to remove a popupmenu in project list
document.addEventListener('click', removeProjPopupMenu);

//Task Form
openAddTaskBtnCont.addEventListener('click', displayAddTaskForm);
cancelAddTaskBtn.addEventListener('click', cancelAddTask);
addTaskBtn.addEventListener('click', addTask);
addTaskInputCont.addEventListener('keypress', (e) => keyPressEnterEventListener(e, addTaskBtn));
cancelEditTaskBtn.addEventListener('click', cancelEditTask);

//Task List elements
taskList.addEventListener('click', toggleCheckBox);
taskList.addEventListener('click', toggleImportant);

//Edit task list
taskList.addEventListener('click', displayTaskPopUpMenu);
taskList.addEventListener('click', displayEditTaskFrom);
taskList.addEventListener('click', deleteTask);