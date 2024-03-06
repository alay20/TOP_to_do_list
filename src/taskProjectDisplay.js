import { rightContainer } from "./utils";

export const createTaskProjectDisplay = () => {
    
    const projectMainCont = document.createElement('div');
    projectMainCont.textContent = 'Tasks and Projects here'
    rightContainer.appendChild(projectMainCont);
};