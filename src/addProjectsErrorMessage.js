import { allProjects } from "./data";
import { addNewProjectCont, enterProjectTitleInput, projectNameErrorMsg } from "./utils";

export const addProjectsErrorMsg = () => {
    const newProjectName = enterProjectTitleInput.value;
    const projectNames = Object.keys(allProjects) ;
    if (projectNames.includes(newProjectName)) {
        addNewProjectCont.append(projectNameErrorMsg);
        return;
    }
};

// const newProjectName = enterProjectTitleInput.value;
// for (let key in allProjects) {
//     if (allProjects.hasOwnProperty(key)) {
//         if (key === newProjectName) {
//             addNewProjectCont.append(projectNameErrorMsg);
//         }
//     }
// }