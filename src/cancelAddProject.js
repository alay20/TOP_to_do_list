import { addNewProjectCont, enterProjectTitleInput, projectNameErrorMsg } from "./utils"

export const cancelAddProject = () => {
    addNewProjectCont.remove();
    projectNameErrorMsg.remove();
    enterProjectTitleInput.value = '';
}