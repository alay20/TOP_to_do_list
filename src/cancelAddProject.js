import { addProjectsLi, addNewProjectCont, enterProjectNameInput } from "./utils"
import { addNewProject } from "./addProjects";

export const cancelAddProject = () => {
    addNewProjectCont.remove();
    enterProjectNameInput.value = '';
}