import { addProjectBtn } from "./utils"

export const keyPressEnterAddProject = (e) => {
    if (e.keyCode === 13) {
        addProjectBtn.click();
    }
}