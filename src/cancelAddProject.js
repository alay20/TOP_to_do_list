import { addNewProjectCont, enterProjectNameInput } from "./utils"

export const cancelAddProject = () => {
    addNewProjectCont.remove();
    enterProjectNameInput.value = '';
}