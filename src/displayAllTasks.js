import { rightContainer, projectTitleCont } from "./utils";

export const displayAllTasks = (e) => {
    if (e.target)
    
    projectTitleCont.textContent = "All Tasks";
    rightContainer.appendChild(projectTitleCont);


};