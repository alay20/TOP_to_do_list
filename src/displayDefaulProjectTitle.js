import { rightContainer, projectTitleCont } from "./utils";

export const createDefaultAllTasksTitle = () => {
    projectTitleCont.textContent = "All Tasks";
    rightContainer.appendChild(projectTitleCont);
};