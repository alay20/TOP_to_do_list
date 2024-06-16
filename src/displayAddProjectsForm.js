import { addProjectsDiv, addNewProjectCont, enterProjectTitleInput } from './utils';

export const openAddNewProject = () => {
    addProjectsDiv.insertAdjacentElement('afterend', addNewProjectCont);
    enterProjectTitleInput.focus();
}