import { addProjectsDiv, addNewProjectCont, enterProjectNameInput } from './utils';

export const openAddNewProject = () => {
    addProjectsDiv.insertAdjacentElement('afterend', addNewProjectCont);
    enterProjectNameInput.focus();
}