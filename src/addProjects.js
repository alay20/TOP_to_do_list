import { projectsList, addNewProjectCont, enterProjectNameInput } from './utils';

export const addNewProject = () => {
    projectsList.append(addNewProjectCont);
    enterProjectNameInput.focus();
}