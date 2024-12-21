import { addProjectBtnEdit, cancelAddProjectBtnEdit, enterProjectTitleLabelEdit, enterProjectTitleInputEdit, editProjectCont, } from './utils';
import folderCogIcon from './icons/folder-cog.svg';
import { editProjectNameCancelBtn } from './editProjectNameCancelBtn';

export const editProjectName = (e) => {

if (e.target.matches('.popup-menu-edit')){
  const openedEditProjectCont = document.querySelector('.edit-project-form-cont')

  if (openedEditProjectCont) {
    editProjectNameCancelBtn();
  }

  if (e.target && e.target.matches('.popup-menu-edit')) {    
    //Create elements for form to edit project name
    const projectIcon = new Image();
    projectIcon.src = folderCogIcon;
    projectIcon.classList.add('icons');
    projectIcon.classList.add('add-project-icon-edit');

    // Append elements from utils
    editProjectCont.append(projectIcon, enterProjectTitleLabelEdit, enterProjectTitleInputEdit, addProjectBtnEdit, cancelAddProjectBtnEdit);
    
    enterProjectTitleInputEdit.focus();

    //Determine which project name to be edited
    const liOfClickedProject = e.target.parentElement.closest('li');
    console.log('Project to be edited:', liOfClickedProject);

    if (liOfClickedProject) {
      var projectTitle = liOfClickedProject.dataset.projectTitle;
      };
      
    enterProjectTitleInputEdit.value = projectTitle;

    editProjectCont.dataset.projectTitle = projectTitle;
    
    //Remove popup menu and the elements for Project name being edited
    const popupMenu = document.querySelector('.project-popup-menu');
    popupMenu.remove();
    

    liOfClickedProject.replaceWith(editProjectCont);
      };
}};